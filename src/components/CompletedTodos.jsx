import React from "react";

export const CompletedTodos = (props) => {
  const { records, onClick } = props;
  return (
    <div className="area completed-area">
      <p className="title">完了のTODO</p>
      <ul id="completed-list">
        {records.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClick(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
