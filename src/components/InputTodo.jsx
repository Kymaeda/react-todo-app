import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="area input-area">
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
