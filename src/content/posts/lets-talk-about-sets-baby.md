---
author: Khalal Walker
title: "Let's Talk About Sets, Baby"
image: '../img/salt-n-pepa.jpeg'
date: 2019-10-23
draft: false
tags: ['javascript']
layout: post
---

A **Set**, in JavaScript, is an abstract data type that stores unique elements. Sets are ordered, meaning that they can be iterated over in the order that they were inserted.

---

### Constructing

A set can be initialized with no arguments...

```javascript
const a = new Set();
console.log(a); // Set {}
```

...Or with an [iterable object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Built-in_iterables)

```javascript
const b = new Set([1, 2, 3, 4, 3, 2, '4']); // Set {1, 2, 3, 4, '4'}
const c = new Set('Mississippi'); // Set {'M', 'i', 's', 'p'}
```

A couple of things to remember:

- Our set `c` has only 4 elements because sets do not store duplicates.
- Types are not coerced when values are added, so 4 and '4' are different.

---

### Inserting Elements

To insert an element, **Set** has a method on its prototype called `add`. The value that we'd like to add is passed into the method as an argument, and the updated Set is returned.

```javascript
const set1 = new Set([1, 2, 3, 4, 5]); // Set {1, 2, 3, 4, 5}
set1.add('hello world'); // Set {1, 2, 3, 4, 5, 'hello world'}
set1.add([true, false]); // Set {1, 2, 3, 4, 5, 'hello world', [true, false]}
```

If we do not pass in an argument to the `add` method, an `undefined` entry will be inserted into the set.

```javascript
const set2 = new Set(); // Set {}
set1.add(4); // Set {4}
set1.add(); // Set {4, undefined}
```

Since the `add` method returns the updated set, they can be chained together.

```javascript
const set3 = new Set();
set3
  .add(2) // Set {2}
  .add(4) // Set {2, 4}
  .add(6) // Set {2, 4, 6}
  .add(8); // Set {2, 4, 6, 8}
```

---

### Removing Elements

To remove an element from a set, we use the `delete` method. We pass in the element that we'd like to remove to the method and a boolean value is returned. If the element is found in the set, it'll be removed and will return `true`. If not, it will return `false`.

```javascript
const set4 = new Set('abcde'); // Set {'a', 'b', 'c', 'd', 'e'}
set4.delete('a'); // true
set4.delete('x'); // false
console.log(set4); // Set {'b', 'c', 'd', 'e'}
```

---

### Other Methods

Set has a few other methods on its prototype, so let's have a look at some of those.

###### Set.prototype.clear()

The `clear` method removes all entries from a given set.

```javascript
const setA = new Set();
setA
  .add(1)
  .add(3)
  .add(5); // Set {1, 3, 5}
setA.clear();
console.log(setA); // Set {}
```

---

###### Set.prototype.has( `val`)

The `has` method returns a boolean value, asserting if the argument being passed exists in the set or not.

```javascript
const setB = new Set([true, false, 1, 2, 3]); // Set {true, false, 1, 2, 3}
setB.has(false); // true
setB.has(true); // true
setB.has('a'); // false
```

---

###### Set.prototype.forEach()

The `forEach` method executes a [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) for each value in the set.

The function is provided with three parameters: key, value, and the current Set object. For sets, the key and value will be the same.

```javascript
const setC = new Set([1, 2, 3]);
const printValue = (key, val, self) => {
  console.log(key, val);
};
setC.forEach(printValue);
// 1 1
// 2 2
// 3 3
```

---

### Removing Duplicates From an Array with a Set

There have been times where I've wanted to remove duplicates from an array. My initial implementation was to use a [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). In this solution, I call the [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) array method on each value. If `indexOf` does not return the current index, the value would be filtered out.

```javascript
const array = [1, 2, 3, 1, 1, 1];
const filteredArray = array.filter((value, index) => {
  return array.indexOf(value) === index;
});
console.log(filteredArray); // [1, 2, 3]
```

---

But... since sets don't store duplicate values we can leverage that functionality. Let's pass the array as argument to our Set constructor.

```javascript
const mySet = new Set(array); // Set {1, 2, 3}
```

We now have a set with distinct values. Using the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), we can expand our set values and store them into a new array.

```javascript
const filteredArr = [...mySet];
console.log(filteredArr); // [1, 2, 3]
```

And voila... an array removed of its duplicates.

---

This article only scratches the surface of what we can do with sets, but this should set a good foundation. I can't wait to see what you build.

---
