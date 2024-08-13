import React, { Fragment } from "react";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  const buttonName = "Some buttom updated 2";
  
  return (
    <Fragment>
      <Header buttonName={buttonName} />
      <Main />
    </Fragment>
  );
}

export default App;
