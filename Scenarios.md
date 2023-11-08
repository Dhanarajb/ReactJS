### State Management: 
##### 1. You're working on a moderately complex React application. Explain how you would decide between local component state, Redux, or the Context API for state management in various parts of the application.
> <u>**Local Component State:**</u>
  - Use it for components that manage their own data and don't need to share it with other components.
  - Use it for simple data that doesn't change frequently.
  - Use it for components that are not deeply nested within the component tree.

> **Context API:**
  - Use it for sharing data between deeply nested components without prop drilling.
  - Use it for managing global application state that is not complex or frequently updated.
  - Use it for applications where you need to avoid passing props through multiple layers of components.

> **Redux:**
  - Use it for managing complex, frequently updated global state.
  - Use it for applications that have a complex data model or require time travel debugging.
  - Use it for applications that may grow in complexity over time.
---
