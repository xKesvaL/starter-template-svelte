# Svelte Starter Template

This is my svelte starter template using material design's UI with TailwindCSS and following atomic design. ([What Is Atomic Design ?](#what-is-atomic-design)) As Material Design 3.0 is not yet (2/15/2023) available for web, I used their figma design kit to recreate everything, following their [guides on styling](https://m3.material.io/styles).

## Table of contents

- [Svelte Starter Template](#svelte-starter-template)
  - [Table of contents](#table-of-contents)
  - [Material Design](#material-design)
    - [Figma Design Kit](#figma-design-kit)
  - [What Is Atomic Design](#what-is-atomic-design)
    - [Atoms](#atoms)
    - [Molecules](#molecules)
    - [Organisms](#organisms)
    - [Templates](#templates)
    - [Pages](#pages)
    - [More](#more)

## Material Design

[Material Design](https://m3.material.io/) is a design system built by Google. It's basically a guide on how to make a good UI/UX, talking about all sorts of topics.

### Figma Design Kit

You can find their figma design kit [here](https://www.figma.com/community/file/1035203688168086460), even if you don't plan on following material design's guidelines it can always be a good thing to get some inspiration and see what the best companies in the world are producing.

## What Is Atomic Design

To summarize [[this article]](https://atomicdesign.bradfrost.com/chapter-2/), Atomic Design is destructuring a website into little portions of itself. It has 5 stages :

1. Atoms
2. Molecules
3. Organisms
4. Templates
5. Pages

![Atomic Design Process](readme/atomic-design-process.png)

### Atoms

Atoms are often pure HTML elements, like a button, an input, things that can't be destructured any more.

![Atomic Design Atoms](readme/atomic-design-atoms.png)

### Molecules

We will see them as simple structures of atoms together, a search bar for example. A mix of a label, input and a button.

![Atomic Design Molecules](readme/atomic-design-molecules.png)

### Organisms

We will see them as a relatively complex structures of molecules or atoms together, a header for example. A mix of a logo [atom/molecule], a navbar [molecule] and the search form [molecule].

![Atomic Design Organisms](readme/atomic-design-organisms.png)

### Templates

We will see them as groups of organisms and molecules together that can be complex. They are used to articulate the wanted design of the page to see the final design and also account for what needs to be responsive.

![Atomic Design Templates](readme/atomic-design-templates.png)

### Pages

Pages are instances of templates that show real content in action, like... pages.

![Atomic Design Pages](readme/atomic-design-pages.png)

### More

If you want to read more about atomic design, [see this website.](https://atomicdesign.bradfrost.com/)
