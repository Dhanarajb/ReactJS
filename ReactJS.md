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
