import React from "react";

const App = () => {
  const onClick = () => {
    alert("clicked");
  };
  const styles = {
    color: "red", // オブジェクトなので、文字列で指定する
    fontSize: "18px" // キャメルケースで書く
  };
  return (
    <>
      <h1 style={styles}>こんにちは！！！</h1>
      <p>hi</p>
      <button onClick={onClick}>ボタン</button>
    </>
  );
};

export default App;
