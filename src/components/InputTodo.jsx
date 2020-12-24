import React from "react";

const style = {
  backgroundColor: "aquamarine",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "7px"
};

const button = {
  borderRadius: "6px",
  border: "none",
  padding: "6px 10px",
  marginLeft: "5px"
};

const input = {
  borderRadius: "6px",
  border: "none",
  padding: "6px 10px",
  outline: "none"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <>
      <div style={style}>
        <input
          disabled={disabled}
          placeholder="ToDOを入力"
          value={todoText}
          onChange={onChange}
          style={input}
        />
        <button style={button} disabled={disabled} onClick={onClick}>
          追加
        </button>
      </div>
    </>
  );
};
