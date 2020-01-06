---
author: Khalal Walker
title: 'Destructuring Objects'
image: '../img/coding.jpeg'
date: 2020-01-05
draft: false
tags: ['javascript']
layout: post
---

### What is Destructuring?

Destructuring is a JavaScript expression, introduced in ES6/ES2015, that allows us to extract values from objects. It creates a simpler syntax for assigning object values to variables.

Let's take a look at how we'd assign values pre-ES6:

```javascript
const character = {
  firstName: 'Spongebob',
  lastName: 'Squarepants',
  age: 33,
};

const firstName = character.firstName;
const lastName = character.lastName;
const age = character.age;
```

Looking at our code, we're repeating the same actions on three different lines. With destructuring, it allows for a concise syntax that can be done on a single line.

```javascript
const { firstName, lastName, age, country } = character;
```

Let's break down what's happening in the above code:

First, create the following variables in memory: firstName, lastName, and age. Then, look for the associated values in the character object and assign them to our created variable. Pretty cool, right?

But what if we don't want our variables to have the same name as the keys of the objects? Well, here's how you would do it.

```javascript
const { firstName: name, lastName: surname } = character;
```

The above code is creating two variables, `name` and `surname`, and assigning the values of `character.firstName` and `character.lastName`. This syntax allows for a little more flexibility, but less concise.

### Nested Destructuring

Let's say we wanted to save the values of the address of our character into three variables: street, city, and state. There are a few ways we can go about it.

```javascript
const character = {
  firstName: 'Spongebob',
  lastName: 'Squarepants',
  age: 33,
  address: {
    street: '124 Conch Street',
    city: 'Bikini Bottom',
    state: 'CA',
  },
};
```

Here's dot notation:

```javascript
const street = character.address.street;
const city = character.address.city;
const state = character.address.state;
```

We could also we destructure values while accessing the `address` object with dot notation:

```javascript
const { street, city, state } = character.address;
```

Or... we can use nested destructuring:

```javascript
const {
  address: { street, city, state },
} = character;

console.log(street, city, state); // 124 Conch Street, Bikini Bottom, CA
console.log(address); // address is not defined
```

In the `character` object access the `address` value, which is an object. The variables `street`, `city`, and `state` are created and assigned the associated values in the address object. Also, the referenced parents are not created as variables, only the last nested properties.

If we want to create a reference to the `address` value, we'd just use a comma.

```javascript
const {
  address,
  address: { street, city, state },
} = character;

console.log(street, city, state); // 124 Conch Street, Bikini Bottom, CA
console.log(address); // Object
```

Destructuring allows you to create references in a more concise way, and I personally like it more than dot notation. It may take some time to get used to, but hopefully this post inspires you to use it more in your code.
