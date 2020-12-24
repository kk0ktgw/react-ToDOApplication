import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";

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
      />
      <div className="imcompleteArea">
        <p className="title">未完了のToDo</p>
        <ul>
          {incompleteToDos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="completeArea">
        <p className="title">完了したToDo</p>
        <ul>
          {completeToDos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
