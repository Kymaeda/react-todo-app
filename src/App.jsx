import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompletedTodo, setIncompletedTodo] = useState(["aaaa", "bbb"]);
  const [completedTodo, setCompletedTodo] = useState(["ccc", "ddd"]);

  return (
    <>
      <div className="area input-area">
        <input placeholder="TODOを入力" id="input" />
        <button id="add">追加</button>
      </div>

      <div className="area incompleted-area">
        <p className="title">未完了のTODO</p>
        <ul id="incompletion-list">
          {incompletedTodo.map((todo) => {
            return (
              // NOTE: loop処理の際はkeyを設定する(部分レンダリングのため)
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="area completed-area">
        <p className="title">完了のTODO</p>
        <ul id="completed-list">
          {completedTodo.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
