+++
title = "Adopting an Ethical License"
heading = "Adopting an Ethical License"
+++

[The Ethical Source Working Group](https://ethicalsource.dev), <time>May,
2020</time>

This guide is not legal advice. We are not lawyers. It's a guide to help
maintainers think through adopting an ethical license without taking on
unnecessary risk.

When starting a new project, [review the existing ethical licenses](/licenses/)
and choose the one that most directly matches the projects goals.

For maintainers of existing projects, there are two strategies:

1. Relicensing, where maintainers request consent from each contributor to
   switch their contributions from the original license to the new license.
2. Sublicensing, where maintainers fork, wrap, re-package or otherwise fulfill
   the current license constraints.

Regardless of the strategy chosen; maintainers _must_ work to preserve and
develop trust between maintainers, contributors, and users of the project
throughout the license adoption process.

Maintainers _should_ understand authorship rights and the licensing constraints
of their current license. This understanding is demonstrated by answering the
following questions clearly, accurately and precisely:

1. Who holds the authorship rights of the past contributions?
2. What constraints does the current license impose upon distributors or
   derivative works?

Maintainers _should_ read the rest of this guide to ensure their understanding
is correct.

## A Potentially Useful Framing

It _may_ be useful to think about intellectual property rights like other
property rights. Imagine a project is a _neighborhood_. Each _house_ has a
_lock_ on it installed by the _homeowner_. The _lock_ is opened by a _key_ that
fits.

To continue to use the home, the _neighborhood maintainer_ must carry a key that
works in the homeowner's lock.

To change the lock, a neighborhood maintainer _must_ get consent from the
homeowner.

In this analogy, the homeowner is a contributor and a house is a substantial
contribution. The lock is the license, and the key is following the constraints
the license imposes.

Changing the lock is _relicensing_. Carrying around a working key for the
locks that cannot be changed is _sublicensing_.

## Authorship Rights

Copyright is the right to exclude others from certain activities relating to
that expressive content, and is the main legal basis for software licensing.
(Other kinds of intellectual property rights, such as patents, are also
important in software licensing, but we'll ignore them for this guide.) A
license is a grant of permission to others to exercise rights that the owner
could otherwise restrict. Typically, an employer owns copyright on software
created by an employee.

In a collaborative community software project, it is generally understood that
each contributor is licensing their copyright under the license selected by the
project. Exceptions exist, such as when a project requires contributors to sign
a
[Contributor License Agreement](https://en.wikipedia.org/wiki/Contributor_License_Agreement)
requiring them to license copyright under more generous terms than the project
license itself would require.

To maintain trust and integrity of the broader open source community;
maintainers _must_ get consent from all contributors whose code remains within
the project before relicensing.

When sublicensing or relicensing, maintainers _must_ continue follow their
current licenses constraints until clear, positive, informed affirmative consent
from past contributors to relicense is received.

## Existing License Constraints

Open source and free software licenses are widely permissive. Those permissions
often have strings attached. Some require distributing the license along with
any copies of the software. Others require the release of derivative works in a
compatible license.

## Examples

This guide cannot cover every license, but maintainers _may_ be able to
determine an appropriate and effective course of action from these examples.

### The MIT License

The MIT License is one of the most widely used open source licenses, and also
one of the most permissive. This makes it one of the easiest to sublicense or
relicense.

To sublicense, maintainers _may_ add an ethical license while continuing to
conform to the constraints imposed by the MIT licensed contributions.

The core constraint of the MIT license is that the body of the license _must_ be
included in any copy or derivative works. This constraint persists so long as
any code that was contributed under the license remains in the project _or_
every contributor whose code remains in copy agrees to relicense their
contributions under the new license.

This is the strategy used by Kurtis Rainbolt-Greene with the assistance of
Richard Fontana in
[VCR](https://github.com/vcr/vcr/blob/b87b1c1fedf7e12e92fa494b444ce9c6c579000d/LICENSE).
