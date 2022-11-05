import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompletedTodos } from "./components/IncompletedTodos";

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
  const returnTodo = (index) => {
    console.log(index);
    const newCompletedTodos = [...completedTodo];
    newCompletedTodos.splice(index, 1);

    const newIncompletedTodos = [...incompletedTodo, completedTodo[index]];
    setIncompletedTodo(newIncompletedTodos);
    setCompletedTodo(newCompletedTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={updateTodoText}
        onClick={addTodo}
      />

      <IncompletedTodos
        records={incompletedTodo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />

      <div className="area completed-area">
        <p className="title">完了のTODO</p>
        <ul id="completed-list">
          {completedTodo.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => returnTodo(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
