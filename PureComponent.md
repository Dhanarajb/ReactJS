A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React. PureComponent class are treated as pure components.

A component must be pure, meaning:

It minds its own business. It should not change any objects or variables that existed before rendering.

Same inputs, same output. Given the same inputs, a component should always return the same JSX.
