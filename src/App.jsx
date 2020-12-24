import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="ToDOを入力" />
        <button>追加</button>
      </div>

      <div>
        <p>未完了のToDo</p>
        <ul>
          <div>
            <li>A</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>B</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <p>完了したoDo</p>
      <ul>
        <div>
          <li>C</li>
          <button>戻す</button>
        </div>
      </ul>
      <div></div>
    </>
  );
};
