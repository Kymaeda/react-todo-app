import React from "react";

// NOTE: propsを引数で受け取る
const ColoredMessage = ({ color, children }) => {
  // const { color, children } = props;

  const styles = {
    color, // オブジェクトなので、文字列で指定する
    fontSize: "18px" // キャメルケースで書く
  };

  // NOTE: props.childrenで、コンポーネントで囲った中身を取得できる
  return <p style={styles}>{children}</p>;
};

export default ColoredMessage;
