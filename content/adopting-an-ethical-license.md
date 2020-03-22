+++
title = "Adopting an Ethical License"
heading = "Adopting an Ethical License"
+++

Be aware that this guide is not legal advice, and we are not lawyers.

When starting a new project, [review the existing ethical licenses](./licenses/)
and choose the one that most directly matches the projects goals.

For maintainers of existing projects, there are two strategies:

1. Relicensing, where maintainers request consent from each contributor to
   switch their contributions from the original license to the new license.
2. Sublicensing, where maintainers fork, wrap, re-package or otherwise fulfill
   the previous contributions in a way that respects the original license.

Regardless of the strategy chosen; maintainers _must_ work to preserve and
develop trust between maintainers, contributors, and users of the project
throughout the license adoption process.

To do so, maintainers _must_ first understand of the authorship rights and
licensing constraints of their current license. Consider:

1. Who holds the authorship rights?
2. What constraints does the current license impose upon distributors or
   derivative works?

## A Potentially Useful Framing

An analogy that _may_ be useful is to think about intellectual property rights
like other property rights. Imagine a project is a "neighborhood." Each "house"
has a "lock" on it that the "homeowner" installed when it was "built". This
"lock" is opened with the right "key." In order to change the "lock", the
"neighborhood maintainer" _must_ check with the "homeowner"; unless the
"homeowner" have has given prior consent.

In this analogy, the "homeowner" is the contributor and the "house" is a
substantial contribution. The "lock" is the license, and the constraints the
license imposes is the "key" that grants usage rights.

## Authorship Rights

Copyright is the right to exclude others from certain activities relating to
that expressive content, and is the main legal basis for software licensing.
(Other kinds of intellectual property rights, such as patents, are also
important in software licensing, but for simplicity we'll ignore them for
purposes of this guide.) A license is a grant of permission to others to
exercise rights that the owner could otherwise restrict. Typically, an employer
owns copyright on software created by an employee.

In a collaborative community software project, it is generally understood that
each contributor is licensing their copyright under the license selected by the
project. Exceptions exist, such as when a project requires contributors to sign
a
[Contributor License Agreement](https://en.wikipedia.org/wiki/Contributor_License_Agreement)
requiring them to license copyright under more generous terms than the project
license itself would require.

Out of respect for past contributors and to maintain trust and integrity of the
broader open source community; maintainers _must_ acquire positive consent from
all contributors whose code remains within the project before relicensing.

When sublicensing, maintainers _must_ continue to conform to their current
licenses constraints. This also applies when relicensing until clear, positive,
informed affirmative consent from past contributors to relicense is received.

## Existing License Constraints

Most open source and free software licenses are widely permissive regarding how
others _may_ use the underlying code. However, those permissions _may_ have additional
constraints applied. Many require that the license the contributors submitted
the contribution under is distributed along with any copies of the software.
Others require that any projects they interact with release their source code in
a compatible license.

This guide cannot cover every license, but maintainers _may_ be able to determine
an appropriate and effective course of action from other licenses examples.

### The MIT License

The MIT License is one of the most widely used open source licenses, and also
one of the most permissive. This makes it one of the easiest to sublicense or
relicense.

To sublicense, Maintainers _may_ add an ethical license while continuing to
conform to the constraints imposed by the MIT licensed contributions.

The core constraint of the MIT license is that the body of the license _must_ be
included in any copy or derivative works. This constraint persists so long as
any code that was contributed under the license remains in the project _or_
every contributor whose code remains in copy agrees to relicense their
contributions under the new license.

This is the strategy used by Kurtis Rainbolt-Greene with the assistance of
Richard Fontana in
[VCR](https://github.com/vcr/vcr/blob/b87b1c1fedf7e12e92fa494b444ce9c6c579000d/LICENSE).
