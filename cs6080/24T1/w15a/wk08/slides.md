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
- React
- JSX
- Components
- Hooks (`useState`, `useEffect`, `useContext`)
- Demo

---

## Reminder

Assignment 4 is released 😮

No late submissions are accepted (unless with special consideration)

---

## Any questions?

---

## Last week we covered...

- Promises (async/await)
- CSS frameworks

---

## Onto React...

---

## How would we represent a todo list in Vanilla JS?

https://codepen.io/mxmason/pen/XWbPNmw

---

## Why is using vanilla JS not optimal? 

- The previous approach is computationally expensive, as the whole DOM is deleted then rerendered from scratch any time anything changes

---

![React](assets/favicon.ico)

## React

- A JavaScript library for web and native user interfaces
- Uses the virtual DOM by keeping our own copy of the HTML hierarchy in JS and compare diffs with our copy to surgically update the DOM

---

## File structure

```js
create-react-app                 // project name
├── README.md
├── node_modules
├── package.json                 // package dependencies
├── package-lock.json
├── .gitignore
├── public                       // files that will be read by the browser
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src                           // source code
    ├── App.css
    ├── App.js                    // contains components + interface logic
    ├── App.test.js
    ├── index.css
    ├── index.js                  // contains setup logic
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js
```

---

## How do I tell React that we're making changes?

- Use `useState` (this keeps track of a value as it is updated, given an initial data value)

```js
function App() {
  const [count, setCount] = useState(0); // initial declaration of state
  // render => change state async => render with new count
  const increment = () => setCount(count + 1); // update state
  return (
    <button onClick={increment}>count: {count} // render state to DOM</button>
  );
}
```

---

## JSX

- A syntax extension that allows you to write HTML like markup inside a JavaScript file

```js
const subject = "World";
const header = (
  <header>
    // read the value of subject and insert into the header
    <h1>Hello, {subject}!</h1>
  </header>
);
```

---

## Components

- A reusable module that renders a part of our app to serve a single obvious purpose

```js
// app component, note: avoid class based components
const AppComponent = () => {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>Hello world!</p>
      </header>
    </div>
  );
};
// export component
export default AppComponent;
```

---

## Component Life Cycle (CLC)

Three stages:

- Mounting - component is added to the UI (ON)
- Updating - updating the state of the component (REFRESH)
- Umounting - component is removed from the UI (OFF)

---

## `useEffect`

- Allows us to implement the component lifecycle in React
- Often used when fetching data

```js
useEffect(() => {
  console.log("hello world"); // runs in mount phase
  return () => console.log("bye world"); // runs when umount phase
}, [foo]); // runs when foo state is updated
```

---

## Props

- External data that a component needs in order to render
- Be careful of prop drilling!!!

```js
// in your component + also is rendered html form in the browser
const AppComponent = (props) => {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>{props.message}</p>
      </header>
    </div>
  );
};
<AppComponent message="Hello world!" />; // example usage in diff file
```

---

## We can one up this with `useContext`...

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

## Demo

Build a react application that contains the following:

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

https://github.com/joanna209/tutoring/tree/main/comp6080/24T1
