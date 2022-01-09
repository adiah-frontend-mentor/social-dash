# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

![Desktop Version](images/readme/screenshot.png)
![Desktop Version Dark Mode](images/readme/screenshot-dark.png)
![Mobile Version](images/readme/screenshot-mobile.png)


### Links

- Solution URL: [github repo](https://github.com/nathanieladiah/social-dash)
- Live Site URL: [demo site](https://nathanieladiah.github.io/social-dash.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I worked with plain CSS for this project.
 

```css
header {
	background-color: var(--topPattern);
	border-bottom-left-radius: 17px;
	border-bottom-right-radius: 17px;

	padding: 2.25rem 1.75rem 5.125rem 1.625rem;
}

@media screen and (min-width: 768px) {
/* @media screen and (min-width: 992px) { */
	header {
		padding: 2.625rem 9.5625rem 10.3125rem 10.125rem;
		
		display: grid;
		grid-template-columns: 7fr 2fr;
		grid-template-rows: 1fr 1fr;
		grid-template-areas:
		"title toggle"
		"label toggle";
	}

	header > hr {
		display: none;
	}

  ...
}
```


I also used a little JavaScript to get the theme switcher to work.

```javascript
toggler.addEventListener('click', () => {
	if (check.checked) {
		themeStyles.href="css/dark.css";
	} else {
		themeStyles.href="css/default.css";
	}
})
```


### Useful resources

- [W3 Schools - Toggle Switch](https://www.w3schools.com/howto/howto_css_switch.asp) - 
I used this as a template to create the toggle switch in CSS.
- [JavaScript Tutorial: Checkbox](https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/) - 
This helped me with getting the state of the toggle in JavaScript.
- [Media Query ](https://www.browserstack.com/guide/what-are-css-and-media-query-breakpoints) - 
I used this as a reference to good media query breakpoints.

## Author

- Website - [Nathaniel Adiah](https://nathanieladiah.github.io)
- Frontend Mentor - [@nathanieladiah](https://www.frontendmentor.io/profile/nathanieladiah)


## Acknowledgments


