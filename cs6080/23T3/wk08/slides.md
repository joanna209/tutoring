---
marp: true
_class: invert
theme: uncover
paginate: true
---

# COMP6080 WK8 Tutorial 🗺️

Joanna He

---

## Agenda

- Week 7 overview
- Assignment 4 walkthrough
- More react hooks (`useContext`)
- Demo
- Routing
- Component libraries

---

## Reminder

Assignment 4 is released 😮

No late submissions are accepted (unless with special consideration)

---

## Any questions?

---

## Last week we covered...

- Web frameworks React
- Hooks (`useState`, `useEffect`)
- Components

---

```js
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

// .. and so on until component 5
```
---

## We can one up this with `useContext`....

- Allows us to share data without passing props
- Resolves prop drilling as you don't need to continually pass state through components
- Often used for global variables in React e.g. tokens + dark mode

---

## So how does `useContext` work?

- We first need to create the context

```js
const moods = {
    happy: '🙂',
    sad: '😢'
}

const MoodContext = createContext(moods);
```

---

## Provide the context to the relevant components

```js
function App() {
    return (
        <MoodContext.provider value={moods.happy}>
            <ChildComponent>
        </MoodContext.provider>
    )
}
```

---

## Consume the value from the nearest parent provider

```js
function ChildComponent() {
    // note useContext must be called below 
    // the level where the provider is defined
    const mood = useContext(MoodContext);
    return <p>{mood}</p>
}
```

---

## Let's put this into practice

Our user wants a blog application that contains:

- A login page that takes in a username and password
- A dashboard page that says something like Hello `username`
- An individual blog page that takes in the blog id as a URL parameter and renders the content on that page 🙂
  - Fetch data from `/post/id` route with the [JSON placeholder API](https://jsonplaceholder.typicode.com/guide/)

Note: The blog application **must** be built with a component library

---

## Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
- [Fireship.io](https://youtube.com/@Fireship)
- [React](https://react.dev/learn)
- [Hayden's lectures xd](https://cgi.cse.unsw.edu.au/~cs6080/23T3/content/lectures/topic)

---

## Tutorial code can be found at

https://github.com/joanna209/tutoring/tree/main/comp6080/23T3
