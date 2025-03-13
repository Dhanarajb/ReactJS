## **Understanding Class Component Lifecycle Methods in React**

When working with class components in React, understanding lifecycle methods is crucial for managing component behavior at different stages. The three important lifecycle methods are:

1. **`componentDidMount()`** – Runs after the component is mounted (inserted into the DOM).
2. **`componentDidUpdate(prevProps, prevState)`** – Runs after the component updates (when props or state change).
3. **`componentWillUnmount()`** – Runs just before the component is removed from the DOM.

---

## **1️⃣ Breakdown of Lifecycle Methods**

### **🔹 `componentDidMount()`**
- This method is called **only once**, after the component has been rendered in the DOM.
- It is commonly used for:
  - **Fetching data from APIs**
  - **Setting up event listeners**
  - **Triggering side effects like subscriptions or timers**

```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Component mounted!");
    // Example: Fetching data from an API
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    return <h1>Hello, World!</h1>;
  }
}
```

📌 **Key points:**
- This method is **executed only once**.
- It is a good place to make API calls or initialize external resources.
- Updating the state inside `componentDidMount()` **will cause a re-render**.

---

### **🔹 `componentDidUpdate(prevProps, prevState)`**
- This method is called **after** the component updates (due to state or prop changes).
- It is commonly used for:
  - **Reacting to prop/state changes**
  - **Calling APIs when certain data changes**
  - **Interacting with DOM elements based on state updates**

```jsx
class MyComponent extends React.Component {
  state = { count: 0 };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Count updated from ${prevState.count} to ${this.state.count}`);
    }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

📌 **Key points:**
- Runs after every update (except the initial render).
- Accepts `prevProps` and `prevState` as arguments to compare with current state/props.
- Should be used carefully to **avoid infinite loops**.

---

### **🔹 `componentWillUnmount()`**
- This method is called **before** a component is removed from the DOM.
- It is commonly used for:
  - **Cleaning up event listeners**
  - **Cancelling API requests**
  - **Clearing intervals or timers**

```jsx
class Timer extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Timer running...");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component unmounted, timer cleared!");
  }

  render() {
    return <h1>Timer is running...</h1>;
  }
}
```

📌 **Key points:**
- Ensures proper cleanup to prevent memory leaks.
- Used when setting up subscriptions or intervals in `componentDidMount()`.

---

## **2️⃣ Interview Questions & Answers**

### **1. What is the purpose of `componentDidMount()`?**
📌 **Answer:**  
`componentDidMount()` is used for executing code **after** the component has been inserted into the DOM. It is commonly used for **API calls, setting up subscriptions, and initializing data**.

### **2. What happens if you update the state inside `componentDidMount()`?**
📌 **Answer:**  
Updating the state inside `componentDidMount()` triggers a **re-render**, but since it only runs once, it won't cause an infinite loop.

### **3. When does `componentDidUpdate()` get called?**
📌 **Answer:**  
It is called **after every re-render** when the component's state or props are updated. We can compare `prevProps` and `prevState` to determine whether to run specific logic.

### **4. How can you prevent an infinite loop in `componentDidUpdate()`?**
📌 **Answer:**  
By **comparing `prevState` or `prevProps`** with the current state/props before updating them.

```jsx
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    console.log("Count changed, executing logic...");
  }
}
```

### **5. What is the importance of `componentWillUnmount()`?**
📌 **Answer:**  
`componentWillUnmount()` is used for **cleaning up resources** like event listeners, API calls, or timers before a component is removed from the DOM.

---

## **3️⃣ Use Cases & Scenarios**

| **Scenario** | **Lifecycle Method** | **Reason** |
|-------------|--------------------|------------|
| Fetching data from an API | `componentDidMount()` | Fetch data after the component has rendered |
| Updating document title when a prop changes | `componentDidUpdate()` | React to prop changes and update UI accordingly |
| Cleaning up a WebSocket connection | `componentWillUnmount()` | Close connection before unmounting to prevent memory leaks |
| Setting up an event listener for window resize | `componentDidMount()` | Attach event listeners when the component is first mounted |
| Removing event listeners | `componentWillUnmount()` | Remove listeners to avoid memory leaks |

---

## **4️⃣ Summary**

| **Method** | **When It Runs** | **Common Use Cases** |
|-----------|----------------|-----------------|
| `componentDidMount()` | After the component mounts | API calls, subscriptions, setting timers |
| `componentDidUpdate()` | After every update (props/state change) | Reacting to prop changes, updating the DOM |
| `componentWillUnmount()` | Before unmounting | Cleanup (event listeners, API calls, timers) |

These lifecycle methods help in managing component behavior effectively, optimizing performance, and preventing memory leaks in React class components.
