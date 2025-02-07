// todoStore.js
import { createSlice } from '@reduxjs/toolkit'

const todoStore = createSlice({
  name: 'todoStore',
  initialState: {
    todoList: [
      { id: 1, text: '첫번째 할일', done: false },
      { id: 2, text: '두번째 할일', done: true },
      { id: 3, text: '세번째 할일', done: false },
    ],
    text: ''
  },
  reducers: {
    updateTodoAction: (state, action) => {
      const idx = state.todoList.findIndex(todo => todo.id === action.payload)
      state.todoList[idx].done = !state.todoList[idx].done
    },
    deleteTodoAction: (state, action) => {
      const idx = state.todoList.findIndex(todo => todo.id === action.payload)
      state.todoList.splice(idx, 1);
    },
    addTodoAction: (state, action) => {
      const cnt = state.todoList.at(-1) ? state.todoList.at(-1).id + 1 : 1;
      const todo = { id: cnt, text: action.payload, done: false }
      state.todoList.push(todo)
    },
    changeTextAction: (state, action) => {
      state.text = action.payload;
    },
  }
});
export default todoStore;
export const { updateTodoAction, deleteTodoAction, addTodoAction, changeTextAction } = todoStore.actions;
