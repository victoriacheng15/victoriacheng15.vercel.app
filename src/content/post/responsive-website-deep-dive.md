---
draft: false
title: Responsive Website Deep Dive
description: "Responsive design builds adaptable websites using flexible grids, images & mobile-first design. Test on devices for the best user experience."
publishDate: "2022-02-14"
tags: [css]
ogImage: "/blog/responsive-website-deep-dive.webp"
---

## What is responsive design? And why it is important?

Responsive design is a way to let a website scale its content and size based on the user's screen size.

But why?

- **_User experience:_** users access your site from a range of mobile devices, we can't know what screen size the user has.

- **_Better SEO rank:_** Google will give a higher score on your responsive site. See [here](https://www.synapseinteractive.com/does-google-give-seo-preference-to-responsive-mobile-websites/231)

## How do make your site responsive?

### Use percentage for container width

The container will have 90% of the browser's width and it will adjust dynamically as you scale it to be narrow or wide with a maximum width of 500px. The second example use this `min()` CSS function, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/min(%29">see MDN</a>. This function takes 2 parameters, the **first **parameter takes minimum width and the **second** parameter takes maximum width. You also write one less CSS line!

```css
.container {
	margin: 0 auto;
	width: 90%;
	max-width: 500px;
}
```

or

```css
.container {
	margin: 0 auto;
	width: min(90%, 500px);
}
```

### Use clamp() function

This function takes 3 parameters - min, val, and max, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/clamp(%29">check it out on MDN</a>.

- min: minimum font size
- val(value): scaling size
- max: maximum font size

👇 The example below will make sure the h1 will have the smallest size of 2rem and the largest size of 5rem. 3vw is the size that will dynamically adjust font size based on the browser's width. Pretty cool, right!

```css
h1 {
	font-size: clamp(2rem, 10vw, 5rem);
}
```

### flexbox

Use `flex-wrap` property and set the value to `wrap`. This will allow you have multiply lines from top to bottom. [More on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)

```css
main {
	padding: 30px;
	display: flex;
	flex-wrap: wrap; /* this!! */
	gap: 1rem;
	background: lightcoral;
}

section {
	background: white;
	flex: 1 1 200px;
	height: 100px;
}
```

### grid

Let's break down `repeat(auto-fill, minmax(150px, 1fr))`:

- `repeat()` => this takes 2 parameters, **number of columns** and **value(s)**. e.g.` repeat(4, 1fr)` or `repeat(4, 100px 1fr)`
- `minmax()` => this takes 2 parameters, **minimum width** and **maximum width**. e.g. `minmax(200px, 1fr)`
- Combine both of them => `repeat(auto-fill, minmax(150px, 1fr)`

_auto-fill is a value that you tell the browser, "please take care of them for me"_

There are two values that you can use for this, auto-fill and auto-fit. This [article](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/) from CSS-Trick breaks it down nicely!

```css
main {
	padding: 30px;
	background: lightblue;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	gap: 1rem;
}
```

### media queries

Lastly, the media queries!!! This allows you to change the value of a specific property based on the screen size. You can go _crazy_ with this! 😁

e.g.

- `flex-direction: column` => `flex-direction: row`
- `font-size: 2rem` => `font-size: 4rem;`
- `background: blue` => `background: lightblue;`
- so on

```css
@media screen (min-width: 500px) {
	.something {
		/* do something */
	}
}
```

## Recap

There are many [smartphone users](https://www.bankmycell.com/blog/how-many-phones-are-in-the-world#:~:text=In%202022%2C%20including%20both%20smart,the%20world%20cell%20phone%20owners.) in the world and the number will continue increasing! Make your website responsive is important and your visitors will have flowless experience while browsing your website!

Thank you for your time! 😊
