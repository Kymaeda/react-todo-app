import React from "react";
import ColoredMessage from "./components/ColoredMessage";

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
      <ColoredMessage color="green">お元気ですか？？</ColoredMessage>
      <ColoredMessage color="blue">ありがとう、元気です！</ColoredMessage>
      <button onClick={onClick}>ボタン</button>
    </>
  );
};

export default App;
