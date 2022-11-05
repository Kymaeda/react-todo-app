import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompletedTodos } from "./components/IncompletedTodos";
import { CompletedTodos } from "./components/CompletedTodos";

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

      <CompletedTodos records={completedTodo} onClick={returnTodo} />
    </>
  );
};
