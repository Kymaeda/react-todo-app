import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="area input-area">
        <input placeholder="TODOを入力" id="input" />
        <button id="add">追加</button>
      </div>

      <div className="area incompleted-area">
        <p className="title">未完了のTODO</p>
        <ul id="incompletion-list">
          <li>
            <div className="list-row">
              <p>test</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          <li>
            <div className="list-row">
              <p>test</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="area completed-area">
        <p className="title">完了のTODO</p>
        <ul id="completed-list">
          <li>
            <div className="list-row">
              <p>test</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
