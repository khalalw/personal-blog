---
author: Khalal Walker
title: Object Immutability in JavaScript
date: 2020-12-13
draft: false
image: '../img/man-coding.jpg'
tags: ['javascript', 'objects']
layout: post
---

### Why Immutability?

Immutability is important because it helps to increase predictability within the code base. Mutation of objects tends to hide changes and creates unexpected side effects, which can lead to more bugs. Also, tracking where an object was mutated tends to be difficult. Whenever in need of mutating an object, it's better practice to create a new object with the updated values rather than modifying the object directly.

###### Changing/Adding a Property in an Object

Traditionally, when we would like to add or create a property to object, we'd use dot or bracket notation to update the property and its value.

```javascript
const obj = {
  a: 1,
  b: 2
};

obj.b = 4;
obj['c'] = 5;

console.log(obj);
// { a: 1, b: 4, c: 5 }
```

This direct mutation of our object is what we'd like to avoid. In the next example, we'll `spread` our object into a new one and define the new values for the properties. The spread operator (`...`) creates a shallow copy of our object entries into a new one, then we can update/add properties to our new object. This allows us to keep our initialized object as it was defined and help to reduce side effects in our code if we ever need to use the initialized value later.

```javascript
const obj = {
  a: 1,
  b: 2
};
const obj2 = { ...obj, b: 4, c: 5 };
console.log({ obj, obj2 });
// { obj: { a: 1, b: 2 }, obj2: { a: 1, b: 4, c: 5 } }
```

###### Removing Object Properties

When we'd like to remove a property and its value from an object, we'd use `delete` operator.

```javascript
const obj = {
  a: 1,
  b: 2,
  c: 3
};
delete obj.a;
console.log(obj);
// { b: 2, c: 3 }
```

Again, this is a mutation of our object which is not in line with the thinking of immutability. In JavaScript, destructuring combined the spread syntax allow us to extract a value from our object and create a new object with the extracted value removed.

```javascript
const obj = {
  a: 1,
  b: 2,
  c: 3
};
const { a, ...newObj } = obj;
console.log(newObj);
// { b: 2, c: 3 }
```

### Enforcing Immutability Natively

Maybe the above tips help you with your code, but what if you want to enforce this across a project to ensure everyone abides by immutability principles? What can you do?

###### Initialize All Objects with `Object.freeze`

[Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) makes the object passed in immutable and returns it. No properties can be added to it and existing properties cannot be removed or changed.

```javascript
const obj = Object.freeze({ a: 1, b: 2, c: 3 });
obj.a = 4;
delete obj.b; // false
console.log(obj);
// { a: 1, b: 2, c: 3 }
```

Freezing an object makes it impossible for anyone to mutate it, ensuring that they'll have to create another.

###### Summary

Using these techniques when updating object properties and values we can ensure the following:

- avoid side effects
- write predictable code

If you have any more tips on how you practice immutability when writing JavaScript, please feel free to [tweet me](https://www.twitter.com/khalalw) and share! And even if you don't, I'd love to hear your perspective as well.
