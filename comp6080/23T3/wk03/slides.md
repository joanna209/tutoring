---
marp: true
_class: invert
theme: uncover
paginate: true
---

# COMP6080 WK3 Tutorial 🗺️

Joanna He

---

## Agenda

- Week 2 overview
- JavaScript
- Demo

--- 

## Reminder

Don't forget assignment 1 is due tomorrow 10pm 😮

No late submissions are accepted (unless with special consideration)

---

## Reminder (cont.)

Assignment 2 has also dropped 🚀 (due next Friday Oct 6, 10pm)

Note: all the HTML/CSS is provided, just need to add the logic in yourself 🙂

---

## Any questions? 

---

## Last week we covered...

- JavaScript
- DOM
- Events
- Event handlers/listeners

---

## Onto DOM creation...

---

## Creating HTML elements on the DOM

To create a new HTML element on the DOM

```js
// instance method("html tag we want to add");
const element = document.createElement("h1");
element.innerText = "Hello world";
```

---

## We can one up this

```js
const element = document.createElement("h1");
element.textContent = "Hello world";
```

Note: this approach is better as it's not susceptible to cross site scripting

---

## We can also add other HTML element attributes with `setAttribute`

```js
const element = document.createElement("h1");
element.textContent = "Hello world";
// assign CSS class of heading-style to the h1 tag
element.setAttribute("class", "heading-style");
```
---

## To append one element to the DOM

We can use `appendChild`

```js
const element = document.createElement("h1");
element.textContent = "Hello world";
document.body.appendChild(element);
```

---

## To append multiple elements to the DOM

We can use `append`

```js
const element = document.createElement("h1");
element.textContent = "Hello world";
const element1 = document.createElement("h1");
element1.textContent = "6080 is very epic";
document.body.append(element, element1);
```

---

## How do I remove an element from the DOM?

Use `remove`

```js
const element = document.createElement("h1");
element.textContent = "Hello world";
element.remove();
```

---

## Demo

Let's create a login form that will take in two fields:
- Email 
- Password

---

## Demo (cont.)

Upon successful submission, we should dynamically render a confirmation message that the user has logged in.

Appropriate validation must be completed for each field:
- Email: check email format i.e. that it contains @
- Password: must be more than 3 characters but less than 50 characters

---

## Tutorial code can be found at 

https://github.com/joanna209/tutoring/tree/main/comp6080/23T3

