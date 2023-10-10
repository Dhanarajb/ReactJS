### What is React?
> React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. 
It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. React allows
developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast,
scalable, and simple. It works only on user interfaces in the application.
---
### There are two types of components.

#### Stateless Functional Component — 
> functional components are literally javaScript functions, they return Html which describes user interface.
```
function Welcome(props) {
return <h1>Welcome to React</h1>;
}
```
#### Stateful Class Component — 
> are regular ES6 classes that extend the component class in the react library.
```
class Welcome extends React.Component {
render() {
return <h1>Welcome to React</h1>;
}
}
```
---
### Why use React?
> Simplicity
> Easy to learn
> Native Approach
> Data binding
> Performance
> Testability
---
### Features of ReactJS
#### JSX
JavaScript XML or JSX is an extension to the JavaScript language syntax. JSX is a simple JavaScript that allows HTML quoting and 
uses these HTML tag syntax to render subcomponents. We can also write in pure old JavaScript.
```
const Welcome = () =>{
return React.createElement(
'div',
null,
React.createElement('h1', null, "Welcome to React")
)
}
```
#### Single-Way data flow
> In React, a set of immutable values are passed to the components renderer as properties in its HTML tags. The component cannot 
directly modify any properties but can pass a call back function with the help of which we can do modifications.
![](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Vl-qdsXdv0wmf_NqgexA7A.jpeg)
