import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  height: "30px",
  width: "400px",
  padding: "10px",
  margin: "10px",
  borderRadius: "5px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div style={style}>
      {/* setTodoTextした時に連動させたいからvalueプロパティも必要 */}
      <input
        placeholder="TODOを入力"
        id="input"
        value={todoText}
        onChange={onChange}
      />
      <button id="add" onClick={onClick}>
        追加
      </button>
    </div>
  );
};
