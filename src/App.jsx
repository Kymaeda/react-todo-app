import React, { useEffect, useState } from "react";
import ColoredMessage from "./components/ColoredMessage";

const App = () => {
  console.log("loaded");
  const [num, setNum] = useState(0);
  const [show, setShow] = useState(true);

  const countUp = () => {
    setNum(num + 1);
  };
  const toggleShow = () => {
    setShow(!show);
  };

  // NOTE: stateが変更されるたびに、この文が実行される
  // このままだと、toggleShowボタンが機能しないので、useEffectを使う

  // 2nd Argに空配列を指定すると、初回レンダリング時のみ実行される
  // 配列の要素にstateを設定すると、そのstateが変更された時のみ関数が実行される
  useEffect(() => {
    if (num % 3 === 0) {
      show || setShow(true); // falseの場合のみsetする
    } else {
      show && setShow(false); // trueの場合のみsetする
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  const styles = {
    color: "red", // オブジェクトなので、文字列で指定する
    fontSize: "18px" // キャメルケースで書く
  };

  return (
    <>
      <h1 style={styles}>こんにちは！！！</h1>
      <ColoredMessage color="green">お元気ですか？？</ColoredMessage>
      <ColoredMessage color="blue">ありがとう、元気です！</ColoredMessage>
      <p>
        <button onClick={countUp}>カウントアップ</button>
      </p>
      <p>
        <button onClick={toggleShow}>ON?OFF</button>
      </p>
      <p>{num}</p>
      {show && <p>(^v^)</p>}
    </>
  );
};

export default App;
