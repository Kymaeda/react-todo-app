import React from "react";

// NOTE: propsを引数で受け取る
const ColoredMessage = (props) => {
  const styles = {
    color: props.color, // オブジェクトなので、文字列で指定する
    fontSize: "18px" // キャメルケースで書く
  };

  return <p style={styles}>{props.message}</p>;
};

export default ColoredMessage;
