/* eslint-disable no-unused-vars */
import React, { useCallback, useRef, useState } from "react";

function TodoForm({ addTodo }) {

  // 비제어 컴포넌트
  // const sendTodo = useCallback((evt) => {
  //   evt.preventDefault();     // form의 JavaScript 취소
  //   const input = document.querySelector('input');

  //   if (input.value.trim() !== '') {
  //     addTodo(input.value);
  //     input.value = '';
  //     input.focus();
  //   }
  // }, [addTodo]);


  // 제어 컴포넌트
  const todoRef = useRef(null);
  const [text, setText] = useState('');
  const changeText = useCallback((evt) => {
    setText(evt.target.value);
  }, []);

  const sendTodo = useCallback((evt) => {
    evt.preventDefault();     // form의 JavaScript 취소
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
      // document.querySelector('input').focus();
      todoRef.current.focus();
    }
  }, [addTodo, text]);

  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" ref={todoRef} value={text} onChange={changeText} />
        {/* <input type="text" className="form-control" /> */}
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendTodo}>Submit</button>
        </div>
      </div>
    </form>
  );
}
export default TodoForm;
