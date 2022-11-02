import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompletedTodo, setIncompletedTodo] = useState(["aaaa", "bbb"]);
  const [completedTodo, setCompletedTodo] = useState(["ccc", "ddd"]);

  const updateTodoText = (e) => setTodoText(e.target.value);
  const addTodo = () => {
    if (todoText === "") return;
    // NOTE: incompletedTodoをimuutableなものとして扱う(good)
    const newTodos = [...incompletedTodo, todoText];
    setIncompletedTodo(newTodos);
    setTodoText("");
  };
  const removeTodo = (index) => {
    const newTodos = [...incompletedTodo];
    newTodos.splice(index, 1);
    setIncompletedTodo(newTodos);
  };
  const completeTodo = (index) => {
    const newIncompletedTodos = [...incompletedTodo];
    newIncompletedTodos.splice(index, 1);

    const newCompletedTodos = [...completedTodo, incompletedTodo[index]];

    setIncompletedTodo(newIncompletedTodos);
    setCompletedTodo(newCompletedTodos);
  };
  return (
    <>
      <div className="area input-area">
        {/* setTodoTextした時に連動させたいからvalueプロパティも必要 */}
        <input
          placeholder="TODOを入力"
          id="input"
          value={todoText}
          onChange={updateTodoText}
        />
        <button id="add" onClick={addTodo}>
          追加
        </button>
      </div>

      <div className="area incompleted-area">
        <p className="title">未完了のTODO</p>
        <ul id="incompletion-list">
          {incompletedTodo.map((todo, index) => {
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
