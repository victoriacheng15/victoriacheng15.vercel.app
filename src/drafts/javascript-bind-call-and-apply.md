---
draft: true
title: "JavaScript - Bind, Call, and Apply"
description: "JavaScript's bind(), call(), and apply() methods control function context, allowing explicit this binding and argument passing."
publishDate: "2023-07-05"
tags: [javascript]
---

## What are they?

In JavaScript, **`bind()`**, **`call()`**, and **`apply()`** are methods that allow you to control the execution context of a function. They provide ways to explicitly set the value of **`this`** within a function and optionally pass arguments to the function. These methods are commonly used when you need to define the context in which a function should be executed or when you want to borrow methods from one object and apply them to another. By utilizing **`bind()`**, **`call()`**, and **`apply()`**, you have more flexibility in managing the behavior and invocation of functions in your JavaScript code.

### bind()

The **`bind()`** method creates a new function that, when called, has **`this`** keyword set to a specified value. It returns a new function with the bound **`this`** value, which can be called later. The **`bind()`** method does not immediately execute the function. It allows you to curry functions (pre-set some arguments) or create a new function with a specific context.

```jsx
const obj = {
	name: "Zephyr",
	sayHello: function () {
		console.log(`Hello, ${this.name}!`);
	},
};

const hello = obj.sayHello.bind(obj);
hello(); // Output: Hello, Zephyr!
```

### call()

The **`call()`** method calls a function with a given **`this`** value and arguments provided individually. It immediately executes the function with the specified context (**`this`** value) and any additional arguments passed individually.

```jsx
const obj1 = {
	name: "Zephyr",
};

function sayHello() {
	console.log(`Hello, ${this.name}!`);
}

sayHello.call(obj1); // Output: Hello, Zephyr!
```

### apply()

The **`apply()`** method is similar to **`call()`**, but it takes arguments as an array. It calls a function with a given **`this`** value and an array of arguments. Like **`call()`**, it immediately executes the function with the specified context and arguments.

```jsx
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max); // Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min); // Expected output: 2
```

## Recap

**`bind()`**, **`call()`**, and **`apply()`** are JavaScript methods that allow you to control the execution context of a function. They enable you to set the **`this`** value explicitly and pass arguments to the function. These methods provide flexibility in managing function invocation and context manipulation in JavaScript.

## Resources

- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind" target="_blank" rel="noopener noreferrer">MDN docs - bind()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/call" target="_blank" rel="noopener noreferrer">MDN docs - call()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/apply" target="_blank" rel="noopener noreferrer">MDN docs - apply()</a>

## Thank you!

Thank you for your time and for reading this!
