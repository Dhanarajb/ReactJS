
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
> In React, the Single-Way Data Flow concept means that data flows in one direction, typically from parent components to child components.
Parent components pass data and properties down to their child components through props, and child components can't directly modify these props.
Instead, child components can communicate changes back to their parent components by invoking callback functions passed as props.
This one-way flow of data ensures predictable and maintainable data handling in React applications.
![](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Vl-qdsXdv0wmf_NqgexA7A.jpeg)
#### Declerative
>React is declarative because it lets developers say what they want the UI to look like based on data, and React figures out how to make it happen.
This makes code simpler, easier to understand, and takes care of the technical details for you, making development more efficient.

The declarative nature of React means that developers describe what they want the UI to look like based on data, and React takes care of the technical details to make it happen. Here's a simple example:

```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
```
> In this React component, we declare how the UI should look based on the data (count). We use JSX to define the UI structure, and we describe that the count should be displayed and a button should be present. When the button is clicked, we want to increment the count.

> React takes care of the underlying logic to make this happen. When the increment function is called, React efficiently updates the UI to reflect the new value of count. This declarative approach makes the code easy to understand and manage, as we don't need to manipulate the DOM directly or handle low-level details. React handles the rendering and updates for us, resulting in more efficient development.


#### VirtualDom
>Virtual DOM:
> In React, for every DOM object, there is a corresponding “virtual DOM object.” A virtual DOM object is a representation of a DOM object,
it creates a virtual copy of the original DOM. It’s a one-way data binding hence manipulating the virtual DOM is quick rather than updating
original DOM because nothing gets drawn onscreen.
![](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*qs4fwxMT-QIvfujHPzNuXw.png)
#### Component Based
>React is component-based, meaning it divides the user interface into small, reusable parts called components. Each component has its job,
making it easier to manage and understand the code. These components can be used repeatedly, making the development process more organized
and efficient. This approach simplifies building complex interfaces by breaking them into manageable chunks.
