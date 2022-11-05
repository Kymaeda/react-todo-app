import React from "react";

export const IncompletedTodos = (props) => {
  const { records, completeTodo, removeTodo } = props;
  return (
    <div className="area incompleted-area">
      <p className="title">未完了のTODO</p>
      <ul id="incompletion-list">
        {records.map((todo, index) => {
          return (
            // NOTE: loop処理の際はkeyを設定する(部分レンダリングのため)
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => completeTodo(index)}>完了</button>
                {/*
                    関数に引数を渡したい場合はarrow関数で新たに呼び出す
                    {removeTodo(index)}だと、ページ描画時に実行されてしまう
                  */}
                <button onClick={() => removeTodo(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
