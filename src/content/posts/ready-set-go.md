---
author: Khalal Walker
title: 'Ready, Set, Go: A Guide to JavaScript Sets'
image: '../img/ready-set-go.jpeg'
date: 2019-10-23
draft: true
tags: ['javascript']
layout: post
---

The `Set` type is an object that lets you store values. It's pretty similar to an array, but does not allow duplicate storage of elements.

---

###### Creating a Set

A Set can be initialized with no arguments...

```javascript
const a = new Set();
console.log(a); // Set {}
```

...Or with an [iterable object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Built-in_iterables)

```javascript
const b = new Set([1, 2, 3, 4, 3, 2, '4']);
console.log(b); // Set {1, 2, 3, 4, '4'}

const c = new Set('Mississippi');
console.log(c); // Set {'M', 'i', 's', 'p'}
```

A couple of things to remember:

- Our Set `c` is only 4 elements, because Sets do not store duplicates.
- Types are not coerced when values are added, so 4 and '4' are different.

###### Adding and Removing Elements from a Set
