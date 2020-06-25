# animated-hamburger-icon-svg [![Build Status](https://travis-ci.com/mattdanielbrown/animated-hamburger-icon-svg.svg?branch=master)](https://travis-ci.com/mattdanielbrown/animated-hamburger-icon-svg)

> Self-contained, animating-between-states, SVG hamburger menu icon.



## Install

### Using Yarn:
```bash
yarn add animated-hamburger-menu-icon-svg
```

### Using NPM:
```bash
npm install animated-hamburger-menu-icon-svg --save
```

## Usage

### Markup
Just the SVG Code:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" id="animated-menu-icon-svg">
  <title>animated-hamburger-menu-icon-svg</title>
  <rect y="4" width="32" height="4" id="top-line"></rect>
  <rect y="16" width="32" height="4" id="middle-line"></rect>
  <rect y="28" width="32" height="4" id="bottom-line"></rect>
</svg>
```

As a button element:

```html
<!-- Navigation Menu Button (Toggable-SVG inside a button element) -->
<button type="button" id="menu-button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" id="menu-icon">
    <title>animated-hamburger-menu-icon-svg</title>
    <rect y="4" width="32" height="4"></rect>
    <rect y="16" width="32" height="4"></rect>
    <rect y="28" width="32" height="4"></rect>
  </svg>
</button>
```

### Javascript
Include the javascript file:

```html
<!-- Wherever import your other javascript files... -->
<script src="~/node_modules/animated-hamburger-menu-icon/animated-hamburger-menu-icon.js"></script>
```


### Stylesheets

All that's left is to include the stylesheet file:

```html
<!-- Inside your <head> element -->
<link rel="stylesheet" href="~/node_modules/animated-hamburger-menu-icon/styles.min.css">
```

> Unless you're using a SCSS pre-processor, in that case, you can import the SCSS style into whatever stylesheet file you like, via:

```scss
@import "~/node_modules/animated-hamburger-menu-icon/_styles.scss";
```
