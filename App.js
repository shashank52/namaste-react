import React from "react";
import ReactDOM from "react-dom/client";

// JSX = is not HTML inside JS, its HTML like syntax
// JSX(transpiled before it reaches the JS Engine) - PARCEL - Babel
// JSX => React.createElement => ReactElement(JS - Object) => HTMLElement(render)
// React Element
const jsxHeading = (
  <h1 className="head" tabIndex={5}>
    Namaste React using JSX
  </h1>
);

// React Title Functional Component
const Title = () => <h1>Namaste Title Functional Component</h1>;

// React Functional Component
// Component Composition
// React Fragments
const HeadingComponent = () => (
  <>
    <div id="container">
      <Title />
      <h1>Namaste React Functional Component</h1>
    </div>
    <div id="container-2"></div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
