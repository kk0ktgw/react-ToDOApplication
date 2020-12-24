import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteToDos, setIncompleteToDos] = useState([]);
  const [completeToDos, setcompleteToDos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteToDos, todoText];
    setIncompleteToDos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteToDos];
    newTodos.splice(index, 1);
    setIncompleteToDos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncmopleteTodos = [...incompleteToDos];
    newIncmopleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeToDos, incompleteToDos[index]];
    setIncompleteToDos(newIncmopleteTodos);
    setcompleteToDos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeToDos];
    newCompleteTodos.splice(index, 1);
    const newIncmopleteTodos = [...incompleteToDos, completeToDos];
    setcompleteToDos(newCompleteTodos);
    setIncompleteToDos(newIncmopleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteToDos.length >= 5}
      />
      {incompleteToDos.length >= 5 && (
        <p style={{ color: "red" }}>
          5つ以上入力できません。まずはToDoを消化しましょう。
        </p>
      )}
      <IncompleteTodos
        todos={incompleteToDos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeToDos} onClickBack={onClickBack} />
    </>
  );
};
