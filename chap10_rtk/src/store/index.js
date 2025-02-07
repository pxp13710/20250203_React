import { configureStore } from '@reduxjs/toolkit'
import countStore from './countStore'
import todoStore from './todoStore'
import contactStore from './contactStore'

const store = configureStore({
  reducer: {
    // countStore: countStore,        // redux 또는 createReducer를 사용하는 경우
    countStore: countStore.reducer,   // createSlice를 사용하는 경우
    todoStore: todoStore.reducer,
    contactStore: contactStore.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    // serializableCheck true => store에 넘어오는 값이 직렬화된 값이니? 
    // 객체도 허용 => false
    return getDefaultMiddleware({ serializableCheck: false })
  }
});
export default store;
