import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseAction, decreaseAction } from './../store/countStore'

function Counter() {
  // store의 값 참조 Hook
  const { storeName, count } = useSelector(store => store.countStore);
  // action 호출을 위한 Hook
  const dispatch = useDispatch();

  return (
    <div>
      <h3>
        {storeName}: {count}
      </h3>
      <button onClick={() => dispatch(increaseAction(3))}>+</button>
      <button onClick={() => dispatch(decreaseAction())}>-</button>
    </div>
  );
}
export default Counter;
