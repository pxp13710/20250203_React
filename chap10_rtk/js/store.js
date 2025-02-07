const increaseAction = (num) => {
  let value = Number(num);
  if (Number.isNaN(value)) value = '';
  return { type: 'COUNT/INCREASE', payload: value }
}
const decreaseAction = () => {
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

// store
const configureStore = (reducerFunc) => {
  let state = reducerFunc(undefined, '');
  // console.log(state);

  const getState = () => {
    return state;
  }

  const dispatch = (action) => {
    state = reducerFunc(state, action);
    // 이벤트 통지...
  }

  return { getState, dispatch }
}

const store = configureStore(countStore);
// console.log(store);
let data = store.getState();          // useSelect()
console.log(data)

// 수정
store.dispatch({ type: 'COUNT/DECREASE' });         // useDispach
data = store.getState();                            // useSelect()
console.log(data)

store.dispatch(increaseAction(3));
data = store.getState();
console.log(data)