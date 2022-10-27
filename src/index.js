import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    // vuejsの、templateと同じようなタグ. <>だけでも良い
    <React.Fragment>
      <h1>こんにちは！！！</h1>
      <p>hi</p>
    </React.Fragment>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
