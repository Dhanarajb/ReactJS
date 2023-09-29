In React, component state and props are two essential concepts for managing and sharing data within a component-based application. 
  Let's explore component state, create components that manage and update their internal state, and understand the difference between props and state.

Component State:

Component state is used to manage and store data that can change over time and affect a component's rendering. Each component can have its own state, 
  and changes to the state trigger a re-render of the component to reflect the updated data.

Here's how you can create components that manage and update their internal state:

Step 1: Create a Stateful Component

Let's create a simple stateful component called Counter that manages and updates its internal state:


import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // Function to increment the count
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;
In this example, we create a Counter component with an internal state called count. We use the setState method to update the state when the "Increment" 
  button is clicked.

Step 2: Render the Component

In your main application file (usually index.js), render the Counter component:


import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);
Difference Between Props and State:

Now, let's clarify the difference between props and state:

Props (Properties):

Props are passed from parent components to child components.
They are read-only and cannot be modified by the child component that receives them.
Props are used for configuring and customizing child components based on data provided by their parent component.
Props are immutable (they don't change).
State:

State is managed and maintained within a component.
It can be modified using the setState method, and changes to the state trigger component re-renders.
State is used for storing data that can change over time due to user interactions, events, or other factors.
State is mutable (it can change).

-------------------------------------------------------------------------
1. Create a React class component that initializes a state variable count to 0 and displays it in a div element. Provide a button that increments count when clicked.


import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
2. Rewrite the previous example using a functional component with the useState hook.


import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
3. Create a functional component that takes an initial count as a prop and displays it. Add a button to increment the count.


import React, { useState } from 'react';

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
4. Implement a checkbox component that toggles between "Checked" and "Unchecked" based on its state.


import React, { useState } from 'react';

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p>{isChecked ? 'Checked' : 'Unchecked'}</p>
    </div>
  );
}
5. Create a component that allows you to add and remove items from a list using state.


import React, { useState } from 'react';

function ListManager() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    setItems([...items, newItem]);
    setNewItem('');
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
6. Create a stopwatch component that displays the elapsed time in seconds and has start, stop, and reset buttons.


import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [running]);

  const startStop = () => {
    setRunning(!running);
  };

  const reset = () => {
    setTime(0);
    setRunning(false);
  };

  return (
    <div>
      <p>Elapsed Time: {time} seconds</p>
      <button onClick={startStop}>{running ? 'Stop' : 'Start'}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
