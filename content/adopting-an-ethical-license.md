+++
title = "Adopting an Ethical License"
heading = "Adopting an Ethical License"
+++

If you are starting a new project, you _may_ [review existing ethical licenses](./licenses/) and choose the one that most directly matches your goals.

For maintainers considering adopting an ethical license on an existing project, be aware that this requires significant work. Each license is different, which makes a general guide difficult to write. Bear in mind that this is not legal advice, and we are not lawyers.

Because there is significant social risk associated with relicensing, we recommend starting by centering an intent to preserve and further develop the trust between maintainers, contributors, and users of the project.

From there, an understanding of the authorship rights and license constraints will serve maintainers well. To do so, we recommend reaching a high degree of confidence in the precision and accuracy of your answers to the following questions:

1. Who holds the authorship rights?
2. What constraints does the current license impose upon distributors or derivative works?

## A Potentially Useful Framing

An analogy that may (or may not!) be useful as you move forward is to think about intellectual property rights in the same manner of other property rights. Let's pretend a project is a "neighborhood." Each "house" has a "lock" on it that the "homeowner" installed when it was "built". This "lock" is opened with the right "key." If, as the "neighborhood maintainer", we want to change the lock, we _must_ check with the homeowner; unless they have given prior consent.

The "homeowner" is the contributor. The "house" is a substantial contribution. The "lock" is the license, and the constraints the license imposes is the "key" to granting you the right to use the home.

## Authorship Rights

Authorship rights are often held by the original author of the contributed source code. Exceptions exist, such as when contributors explicitly assign authorship to the person(s) or organization(s) that maintain the project through a [Contributor License Agreement](https://en.wikipedia.org/wiki/Contributor_License_Agreement).

Out of respect for these past authors, and to ensure adoption of ethical licenses proceed in a way that maintains the trust and integrity of the community; we believe maintainers _should_ acquire positive consent from all authors whose code remains within the project. Further, we recommend projects continue to conform to the constraints of their existing license until clear, positive, informed affirmative consent from past contributors is reached.

## Existing License Constraints

Most open source and free software licenses are widely permissive regarding how others may use the underlying code. However, that permission may have additional constraints applied. Many require that the license the author submitted the contribution under is distributed along with any copies of the software. Others require that any projects they interact with also release their source code in a license that conforms to particular rigors. In all cases, we recommend maintainers read and understand their existing licenses constraints.

While we may not have a guide in place for the particular license your project is under, you may be able to determine a reasonable and socially constructive course of action from reviewing the strategies recommended for software written under other licenses.

### The MIT License

The MIT License is one of the most widely used open source licenses, and also one of the most permissive. This makes it one of the easiest to relicense, but it still may require a significant amount of work.

The core constraint of the MIT license is that the body of the license must be included in any copy or derivative works. This constraint persists so long as any code that was contributed under the license remains in the project _or_ every author with code in the project agrees to relicense their contributions under the new license.

That said, future contributions _do not_ need to be licensed under the MIT license. As a result, maintainers _may_ choose to apply an ethical license to future contributions, while also indicating the existence of MIT licensed code within the project. This is the strategy used by Kurtis Rainbolt-Greene with the assistance of Richard Fontana in [VCR](https://github.com/vcr/vcr/blob/b87b1c1fedf7e12e92fa494b444ce9c6c579000d/LICENSE).
