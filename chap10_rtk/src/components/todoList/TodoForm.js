import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTextAction, addTodoAction } from './../../store/todoStore'

function TodoForm() {
  const { text } = useSelector(store => store.todoStore);
  const dispatch = useDispatch();

  const sendData = (evt) => {
    evt.preventDefault();
    if (text.trim() !== '') {
      dispatch(addTodoAction(text));
      dispatch(changeTextAction(''));
      document.querySelector('input').focus();
    }
  }

  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control"
          value={text} onChange={(evt) => dispatch(changeTextAction(evt.target.value))} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
export default TodoForm;
