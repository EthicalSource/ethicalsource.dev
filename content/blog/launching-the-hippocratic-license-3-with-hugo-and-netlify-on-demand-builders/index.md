+++
title = "Deploying over 393000 URLs under 26 seconds using Hugo and Netlify on-demand builders"
summary = "In this technical writeup I share how we built and launched version 3.0 of the Hippocratic License using the Hugo framework in combination with Netlify on-demand builders."
+++

_This article was first published on [nilsnh.no](https://nilsnh.no/2022/07/21/deploying-over-393000-urls-under-26-seconds-using-hugo-and-netlify-on-demand-builders/)._

In this technical writeup I share how we built and launched version 3.0 of [the Hippocratic License](https://firstdonoharm.dev/) using the [Hugo framework](https://gohugo.io/) in combination with [Netlify on-demand builders](https://docs.netlify.com/configure-builds/on-demand-builders/).<!--more-->

There's a lot that could be said or written of this year-long volunteer effort. However, here I want to focus on how we came to use Hugo and eventually solved the technical challenge of creating the HL 3.0 license builder.

{{< bundled-image name="build-screenshot.png" alt="deployment build log" caption="The proof is in the pudding. Here's [a recent build log which completed in 25.8s](https://app.netlify.com/sites/firstdonoharm/deploys/62d900576466c8000906a905)." >}}

**Disclaimer:** I haven't benchmarked a cold build with no caching enabled. And I believe that all benchmarks should be taken with a grain of salt including this rudimentary one. With the above screenshot I just wanted to give some indication of the general build speed. Feel free to check out the codebase linked below if you want to do some benchmarking yourself.

## Finding the right framework

From the get-go we had a specification document which detailed what problem this site was meant to solve and requirements such as ensuring accessibility, privacy and semantic HTML markup. Moreover, [the Organization for Ethical Source](https://ethicalsource.dev/) (OES) was already a happy user of Netlify as a web host for several sites and was inclined to use it for this site as well.

Though we were a only handful of developers undertaking this task we quickly kicked up a plethora of tech-alternatives on which we could build this new site.

(One might say an overwhelming amount of alternatives.)

I have seen volunteer efforts fall into a deadlock because the developers literally could not agree on what framework to use. So, it was an exiting time of discussing various alternatives searching for a fitting tech stack.

Revisiting our Slack discussions back in August 2021 I see that we considered several static site generator (SSG) frameworks including: [Next.js](https://nextjs.org/), [Gatsby.js](https://www.gatsbyjs.com/), [Hugo](https://gohugo.io/), [Elder.js](https://github.com/elderjs/elderjs) and [Elleventy](https://www.11ty.dev/).

The stalemate broke when it was pointed out that it would be beneficial to try and solve this with Hugo first because other OES sites were already using Hugo and most people on the team had experience with that framework. Thus, we agreed to first try the Hugo+Netlify combo.

## Hitting the SSG wall

An important point to this license builder is that it would have sixteen optional modules. These modules were optional license clauses which could be activated and then be visible in the license text. Additionally, the license text should be downloadable as HTML, Markdown or plain text.

At this point one might pause to ponder how many possible permutations this could lead to, but no I instead jumped straight into trying to statically generate all possible permutations using Hugo and some creative Node.js scripting.

This naive approach went like so:

1. Create [a license file with all modules](https://github.com/EthicalSource/hippocratic-license-3/blob/d26c7d99e5eb00bb99eee3b7f19f14a7b049a42b/content/version/3/0/license-with-all-modules.html).
1. Use scripting to duplicate the license file into all possible versions where file names contain various module IDs.
1. Finally, Hugo would start building all the files and if-checks in the Hugo templating would show/hide modules based on the file names.

{{< bundled-image name="failed-generate-attempt.png" alt="a terminal window divided into three tabs" caption="It's at this point I learned that the naive approach was just a tad too naive." >}}

From the screenshot above you can see that I had generated various license files named `hl-bds.html` and so on. Then I counted the amount of generated files by calling the command `ls | wc -l` which returned a total of 131 074 items (!). Finally, I called `hugo` to build the site and it never completed.

To see the codebase at the point which it reached this bump in the road you can check out [commit-SHA d26c7d9](https://github.com/EthicalSource/hippocratic-license-3/tree/d26c7d99e5eb00bb99eee3b7f19f14a7b049a42b).

> Weeks of coding can save you hours of planning (programmer proverb of unknown origin).

Some cursory [napkin math](https://www.youtube.com/watch?v=IxkSlnrRFqc) would have revealed that using SSG to generate all necessary license version files would amount to an immense workload. Regrettably I didn't do such calculations on beforehand, but luckily I didn't spend weeks coding up this either. Also, I'm hereby making a mental note to try some napkin math for future projects.

## Netlify on-demand builders to the rescue

Okay, so we couldn't use SSG to just generate a ton of license files during site deployment. Thankfully, I found that Netlify offers something called [on-demand builders (ODB)](https://docs.netlify.com/configure-builds/on-demand-builders/). ODB is a specialized [Netlify function](https://www.netlify.com/products/functions/) where the function's web response is cached at [Netlify's CDN servers](https://www.netlify.com/blog/2016/04/15/make-your-site-faster-with-netlifys-intelligent-cdn/).

Here's an overview of the architecture behind the current solution:

1. We provide Hugo with a [content/\_build-dependency-hl-3.0](https://github.com/EthicalSource/hippocratic-license-3/tree/f1e4e2613b07ef2242085b0729de1636ea509d3c/content/_build-dependency-hl-3.0) folder which contains the individual license module definitions and the full license text that includes all the module definitions.
1. For the interactive license builder page we use Hugo templating to include the full license text. Moreover, we use JavaScript to toggle the visibility of individual modules and tailor license download links.
1. For the ODB we have a build script that grabs the full license HTML generated by Hugo, stringifies it and stores it in `hl-full.js`.
1. When a user clicks a tailored license download link such as [/version/3/0/eco-extr.txt](https://firstdonoharm.dev/version/3/0/eco-extr.txt) that request gets redirected to our ODB function which inspects the inbound URL and loads HTML data from `hl-full.js` into a [JSDOM instance](https://github.com/jsdom/jsdom) where we can show/hide the correct modules, update section numbering, convert to the proper content format and then finally return a web response.

Beyond CDN-support ODB allows us to tailor the [Content-Type header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) so that browsers correctly handle the ODB response as being either HTML, Markdown or plain text. Furthermore ODB ensures that the license text can be read without having JavaScript enabled. I'm happy that we didn't release a license that would change its terms based on whether or not JavaScript was enabled (phew).

In terms of possible license permutations (including content formats) supported by this license builder in its current form my _guesstimate_ is that it totals to approximately 393 222. This calculation is just based on the screenshot above where I counted the generated `.html` files and multiplied it with the three content formats we wanted.

Taking a step back from ODB it's also worth mentioning Netlify's research and development into a concept they've coined [Distributed Persistent Rendering (DRP)](https://www.netlify.com/blog/2021/04/14/distributed-persistent-rendering-a-new-jamstack-approach-for-faster-builds/). In essence DRP means that we only build essential pages during site deployment while deferring the rest of the page builds to be performed just-in-time and cached by CDN servers.

"But wait isn't this just clever caching logic at the CDN-level?"

Yes, this is arguably "just" clever caching logic but caching is still a hard problem. And yes, you could setup your own server and program your own effective caching and cache invalidation by building upon the CDN APIs of [Cloudflare](https://api.cloudflare.com/) or [Fastly](https://developer.fastly.com/reference/api/). I'm not saying that it isn't worthwhile to program CDN's this way. My point here is just that based on my experience in this project I've found that DRP and ODB strike a wortwhile balance where you get a lot of caching functionality with fast builds from a reasonable abstraction that protects you from a tar pit of accidental complexity. Lord knows I've debugged a lot of caching issues.

But I digress.

To summarize I'll note that ODB proved to be a perfect fit for our use-case which was to launch a license builder for a global audience. And from an operational perspective where we're mostly volunteer contributors I'd argue that the codebase should prove pleasant to maintain and develop further in the future. Nothing's given off course, but the outlook is good.

## From here the work begins

With this new license builder finally released I can't wait to put it to use in future programming projects. And I hope that you check it out as well.

Be sure to check out:

- https://firstdonoharm.dev/, The Hippocratic License 3.0.
- https://ethicalsource.dev/, Organization for Ethical Source.
- [The codebase behind Hippocratic License 3](https://github.com/EthicalSource/hippocratic-license-3)

[Big thanks to everyone](https://twitter.com/EthicalOSS/status/1538957062348103682) who contributed to this release!
