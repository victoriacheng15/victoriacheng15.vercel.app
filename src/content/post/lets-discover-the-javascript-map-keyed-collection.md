---
title: Let's Discover the JavaScript Map Keyed Collection
description: "Learn about JavaScript Map: its keyed collection, differences from objects & how to perform CRUD operations using Map methods."
publishDate: "2023-02-08"
ogImage: "/blog/js-map-keyed-collection.jpg"
tags: [javascript, data structure]
---

![JavaScript Map Keyed Collection](/blog/js-map-keyed-collection.jpg)

<!--truncate-->

## What is Map?

It is an object that holds key-value pairs and remembers the original insertion order of the keys. It is similar to `Object` with the main difference being that `Map` allows keys of any type.

### Map vs Object - key type

The Map can have any key types including functions, objects or any primitive while an Object must be a string or symbol

```js
const map = new Map();
map.set("a", "this is string");
map.set(1, "this is number");
map.set(true, "this is boolean");

const object = {};
object.a = "this is string";
object[1] = "this is number";
object.true = "this is boolean";

console.log(map);
console.log(object);
```

![image](https://user-images.githubusercontent.com/35031228/217418449-56848707-1ab2-4fd3-b018-ec1373be44b1.png)

let's use `typeof` to check the key type.

```js
map.forEach((_, key) => {
	console.log(`key value: ${key} | type: ${typeof key}`);
});

Object.keys(object).map((key) => {
	console.log(`key value: ${key} | type: ${typeof key}`);
});
```

![image](https://user-images.githubusercontent.com/35031228/217418862-7b816c4b-b904-4869-a670-37a4b45f486e.png)

### Map vs Object - Performance and Support

According to the MDN docs, Map offers better performance while the object is not optimized.

![Screenshot from 2023-02-08 13-57-54](https://user-images.githubusercontent.com/35031228/217649940-3963e5bd-8c96-458f-926e-a39e35056ad9.png)

At this moment, Map is supported in all major browsers based on [caniuse.com](https://caniuse.com/mdn-javascript_builtins_map).

![Screenshot from 2023-02-08 14-20-21](https://user-images.githubusercontent.com/35031228/217653562-bd683908-a4dc-4119-9f62-4a5f3ae5f797.png)

## Methods

Let's say you have character data that you need to add to `Map` object.

```js
const characters = [
	{ id: 1, name: "The Doctor", age: 900 },
	{ id: 2, name: "Rose Tyler", age: 26 },
	{ id: 3, name: "Martha Jones", age: 27 },
	{ id: 4, name: "Donna Noble", age: 31 },
	{ id: 5, name: "Amy Pond", age: 26 },
];

const map = new Map();
```

### set(key, value)

This method is to add or update an element with a key and a value.

```js
for (const character of characters) {
	map.set(character.id, character);
}
// or
characters.forEach((character) => {
	map.set(character.id, character);
});
```

![image](https://user-images.githubusercontent.com/35031228/217419815-72b1a16f-f22c-4c08-9df5-c9f3b750bc58.png)

### has(key)

This method will find out if the key exists in the Map object by returning a boolean value.

```js
const checkForRose = map.has(2);
console.log("Is Rose existed in the map? ", checkForRose);

const checkForSomething = map.has(7);
console.log("Is something existed in the map? ", checkForSomething);
```

![image](https://user-images.githubusercontent.com/35031228/217420397-f5de8449-e29a-4731-9991-a34a95cff011.png)

### get(key)

This method will return the character based on the key. If the key doesn't exist in the Map object, it will return `undefined`

```js
const getMartha = map.get(3);
console.log("Martha Information: ", getMartha);

const getSomething = map.get(7);
console.log("There is no key value of 7: ", getSomething);
```

![image](https://user-images.githubusercontent.com/35031228/217421040-61fa7014-44b6-46b3-a747-507536046b9b.png)

### delete(key)

This method removes the specified element from a Map with the key value. If the key doesn't exist, it will return `false`

```js
const sorryMartha = map.delete(3);
console.log("Deleting Martha Information: ", sorryMartha);

const deleteSomething = map.delete(7);
console.log("Deleting something that doesn't exist: ", deleteSomething);
```

![image](https://user-images.githubusercontent.com/35031228/217423087-f826a46d-8c92-4d3f-aaa8-f87176fae067.png)

### clear()

This method removes all elements from a Map object.

```js
console.log(map);

map.clear();

console.log(map);
```

![image](https://user-images.githubusercontent.com/35031228/217423668-c7b9e750-7088-4c3f-8353-4b653f4e23af.png)

### size

This is similar to `array.length` and will return the total number of elements in a Map object.

```js
const checkMapSize = map.size;
console.log("The size of characters data: ", checkMapSize);
// The size of characters data:  5
```

## Iteration over Map

There are 3 ways to iteration over Map: `keys()`, `values()`, and `entries()`

### keys()

This method returns keys for each element in the Map object in the insertion order.

```js
const keys = map.keys();
console.log(keys);
```

![image](https://user-images.githubusercontent.com/35031228/217429552-1349ddb2-ee12-4fdb-ae05-5743dbf43871.png)

### values()

This method will return each element value.

```js
const values = map.values();
console.log(values);
```

![image](https://user-images.githubusercontent.com/35031228/217429688-ce4ceb37-c04a-4e87-aa85-3254c14577b4.png)

### entries()

This method will return the `[key, value]` pairs of each element.

```js
const entries = map.entries();
console.log("entries", entries);
```

![image](https://user-images.githubusercontent.com/35031228/217429876-66d9bff1-a693-4ebf-a5f8-e406deab17f8.png)

## Recap

Map and object are very similar data structures since both of them store key-value pairs. However, one main difference is that the key value in Map can be any type while the key value in the object must be a string or symbol. The Map offers methods like `get()`, `has()` and more to perform create, read, update, and delete operations. Also, three methods such as `key()` to iterate over the Map object.

If you are curious about the performance between Map and object, Zhenghao explains about this in their blog (3rd link in the resources). In short, **Map** is faster than the object, unless small integer and is more memory-efficient. Additionally, MDN docs also mentioned that Map is optimized for the frequent adding and removing of elements while the object is not optimized.

## Resources

- [Map -MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Map -The Modern JavaScript Tutorial](https://javascript.info/map-set#map)
- [Map vs Object - Zhenghao](https://www.zhenghao.io/posts/object-vs-map)

## Thank you!

Thank you for your time and for reading this!
