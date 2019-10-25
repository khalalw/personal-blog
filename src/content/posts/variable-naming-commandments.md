---
author: Khalal Walker
title: 'The 5 Commandments of Naming Variables'
image: '../img/moses-commandments.jpg'
date: 2019-10-25
draft: false
tags: ['javascript']
layout: post
---

When I was in undergrad at [Jackson State University](https://www.jsums.edu) I was a part of an arts collective called Outspoken, and my choice of art was poetry. We'd meet every Sunday to catch up on our week, go through writing exercises, and audition our poems in front of the group. At the end of each piece, we'd offer critiques on what we felt would make the poem better.

One of the things we consistently emphasized was, "Show. Don't tell." Showing is using words that allow a reader to experience a text through their own imagination, while telling is giving a brief summary.

> Don't tell me the moon is shining; show me the glint of light on broken glass. — Anton Chekhov

As I progressed in my coding journey, I realized that programming is very similar to poetry. The end goal for both is to tell a story. Well... to **show** that story to a reader. I believe the most important part of telling a vivid story, in programming, is taking pride in naming variables.

Naming variables can be tough, but it's indubitably worth it. It holds a ton of value when you, or someone else, visit the code at a later time. Code is intended to complete a task but doesn't have much value if no one else can understand it.

So, here are 5 commandments that help me make better variable naming decisions, and they may also be great for you.

---

### I. Thou shalt name thy boolean a yes/no "question" in the affirmative.

As we know, booleans have the ability to be one of two values: `true` or `false`. I believe that the variable name should be a question and the value should answer that question. More importantly, I'm not fond of asking negating questions because double negatives can cause confusion.

```javascript
// bad
const active = true;
const disabled = false;

// bad - negating questions
const isInactive = false;
const isDisabled = true;

// preferred
const isActive = true;
const isEnabled = false;
```

---

### II. Thou shalt use plural nouns for array names.

Arrays are a data structure that hold multiple values inside of a single variable. A lot of the time, these values will be of the same type. The variable name is an aggregate of what the array holds.

```javascript
// not quite
const array = ['Nigeria', 'Mexico', 'France', 'Ethiopia'];

// better
const foreignCountries = ['Nigeria', 'Mexico', 'France', 'Ethiopia'];
```

---

### III. Thou shalt use a verb and [object](<https://en.wikipedia.org/wiki/Object_(grammar)>) to name functions.

When I hear function, I think action. Functions are invoked to do something: update a value, return a value, modify a data structure, etc. The verb-object syntax is a great way to name functions.

> If a function exists in your program, it has a purpose; otherwise, take it out! If it has a purpose, it has a natural name that describes that purpose. If it has a name, you the code author should include that name in the code, so that the reader does not have to infer that name from reading and mentally executing that function's code. - Kyle Simpson

```javascript
// bad
function update(currentUsername, updatedUsername) {}

// good
function fetchAccountDetails(accountNumber) {}
function updateUsername(currentUsername, updatedUsername) {}
```

---

### IV. Thou shalt not fret over making names too long.

Variable names need not to be one letter, and in a lot of cases one word is even too short. Descriptive variable names ease the impact when someone sees the code for the first time. When developers write shorter variable names, they tend to write a lot more comments about how the code works. Comments should explain why and your variable names tell us how.

---

### V. Thou shalt keep thy reader in thy thoughts.

Unless you never plan to share your code, it will be read by someone else other than yourself. You shouldn't be the only person to understand it. From a black-box standpoint, if I never look at the inner workings for a function, I should have a general idea of what is happening.

---

### Conclusion

Remember, coding is like poetry. Show, don't tell. Take pride in the art of naming variables, because it will pay off in the long-term.

These are my opinions, so please take them with a grain of salt. If you have any feedback you'd like to share, feel free to [tweet me](https://www.twitter.com/khalalw). I'd love to hear what you have to say.
