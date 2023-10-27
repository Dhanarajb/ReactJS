#### functional Component
> The functional component are defined as javascript function.
> It take properties and return the JSX as output.

```
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
> Functional components are simple, easy to read, and ideal for representing UI elements that don't have their own state or lifecycle methods.

#### Class Component
> Its class extends React.Component and create render function which returns a react elements.
```
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>Hello world</h1>
    );
  }
}
```
> Class-based components have a more extensive lifecycle, which allows you to manage state changes and perform actions at specific points in the component's lif

#### JSX
> JSX is stands for javascript XML. It allows us to directly write HTML in React, JSX can easily convert HTML tags to react element.

![image](https://github.com/Dhanarajb/ReactJS/assets/88299676/31cff1ea-7c29-42da-b8a0-99e109b7148a)
