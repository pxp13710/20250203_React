// 3. createSlice 사용 - 동기, 비동기 모두 사용 가능
// store 등록에서
// reducer: {
//  countStore: countStore, => countStore: countStore.reducer 로 변경해야 한다
// },
import { createSlice } from '@reduxjs/toolkit'

// 비동기 Action
// export oneAction = () => {}

const countStore = createSlice({
  name: 'countStore',           // 필수. 중복되지 않는 임의의 이름
  initialState: {               // state의 기본값
    storeName: 'Count Store',
    count: 0,
  },
  // 동기 처리를 담당한다. 개별 export를 별도로 할 필요가 있다
  reducers: {
    increaseAction: (state, action) => {
      state.count = state.count + action.payload;
    },
    decreaseAction: (state) => {
      state.count = state.count - 1;
    },
  },
  // 비동기 처리를 한다. 별도로 기술된 action을 받아 처리
  extraReducers: (builder) => {

  }
})
export default countStore;

// 비동기 action을 reducers에서 별도로 export
export const { increaseAction, decreaseAction } = countStore.actions;


/*
// 2. 비동기 처리가 없는 경우
import { createAction, createReducer } from '@reduxjs/toolkit'

// action
// dispatch로 호출하면서 전달하는 매개변수를 그대로 payload라는 이름으로 매핑해서 reducer 함수에 전달
// { type: 'COUNT/INCREASE', payload: 전달된 값 }
// export const increaseAction = createAction('COUNT/INCREASE');

export const increaseAction = createAction('COUNT/INCREASE', (num) => {
  let value = Number(num);
  if (Number.isNaN(value)) value = '';

  // payload 값만 전달하면 첫번째 매개변수('COUNT/INCREASE')를 병합해서 전달
  return { payload: value }
});
export const decreaseAction = createAction('COUNT/DECREASE');

const init = {
  storeName: 'Count Store',
  count: 0,
}
const countStore = createReducer(init, (builder) => {
  builder.addCase(increaseAction, (state, action) => {
    // immer처럼 새로운 객체를 생성해서 반환해 준다. 즉 state가 새로운 객체
    state.count = state.count + action.payload;
  });

  builder.addCase(decreaseAction, (state) => {
    state.count = state.count - 1;
  })
});
export default countStore;
*/



/*
// 1. redux 방식
// action
export const increaseAction = (num) => {
  let value = Number(num);
  if (Number.isNaN(value)) value = '';
  return { type: 'COUNT/INCREASE', payload: value }
}
export const decreaseAction = () => {
  return { type: 'COUNT/DECREASE' }
}

const init = {
  storeName: 'Count Store',
  count: 0,
}
const countStore = (state = init, action) => {
  switch (action.type) {
    case 'COUNT/INCREASE':
      return { ...state, count: state.count + action.payload };
    case 'COUNT/DECREASE':
      return { ...state, count: state.count - 1 };
    default: {
      return state;
    }
  }
}
export default countStore;
*/