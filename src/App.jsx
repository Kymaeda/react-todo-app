import React, { useState } from "react";
import ColoredMessage from "./components/ColoredMessage";

const App = () => {
  const countUp = () => {
    setNum(num + 1);
  };
  const styles = {
    color: "red", // オブジェクトなので、文字列で指定する
    fontSize: "18px" // キャメルケースで書く
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={styles}>こんにちは！！！</h1>
      <ColoredMessage color="green">お元気ですか？？</ColoredMessage>
      <ColoredMessage color="blue">ありがとう、元気です！</ColoredMessage>
      <button onClick={countUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
