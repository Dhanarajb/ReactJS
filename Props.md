#### Passing Props
> Props are a way to pass data from parent to child components.

```
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  // Data to be passed to the child component
  const greeting = 'Hello, World!';

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={greeting} />
    </div>
  );
}
export default ParentComponent;
```
```
import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{props.message}</p> {/* Accessing the 'message' prop */}
    </div>
  );
}

export default ChildComponent;
```
