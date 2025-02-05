import React, { useCallback, useEffect, useMemo, useReducer } from "react";
import { reducerFunc, init } from './../reducer/A06Reducer'
/*
const reducerFunc = (state, action) => {
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case 'A05HOOK/CHANGENUMBER':
      // action.payload => evt.target
      let value = Number(action.payload.value);
      if (Number.isNaN(value)) value = '';
      return { ...state, [action.payload.name]: value };     // 이 값으로 data 변경 => 화면 리렌더링
    case 'A05HOOK/CHANGESTRING':
      // action.payload => evt.target
      return { ...state, [action.payload.name]: [action.payload.value] };     // 이 값으로 data 변경 => 화면 리렌더링
    case 'A05HOOK/CHANGETODAY':
      return { ...state, today: new Date() };
    case 'A05HOOK/ADDLIST':
      if (state.avg > 0) {
        const newList = state.list.concat(state.avg);
        return { ...state, list: newList };
      } else {
        return state;
      }

    default:
      return state;
  }
}
const init = {
  num: '',
  str: '',
  today: new Date(),
  avg: '',
  list: [],
}
*/

function A06Hook() {
  // data => 상태변수. useReducer의 함수가 반환한 값으로 매핑
  // dispatch => userReducer의 함수의 참조값
  const [data, dispatch] = useReducer(reducerFunc, init);

  const changeNumber = useCallback((evt) => {
    dispatch({ type: 'A05HOOK/CHANGENUMBER', payload: evt.target })
  }, []);
  const changeString = useCallback((evt) => {
    dispatch({ type: 'A05HOOK/CHANGESTRING', payload: evt.target })
  }, []);
  const addList = useCallback((evt) => {
    dispatch({ type: 'A05HOOK/ADDLIST' })
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'A05HOOK/CHANGETODAY' });
    }, 3000);
  }, []);

  const getAverage = useMemo(() => {
    console.log('계산중...');
    if (data.list.length === 0) return 0;
    const total = data.list.reduce((acc, item) => {
      return acc + item;
    }, 0);

    return total / data.list.length;
  }, [data.list]);


  return (
    <div className="mb-5">
      <h3>A05 useState, useEffect</h3>

      <div className="mb-3">
        Num: {data.num}
        <input type="text" name="num" className="form-control" onChange={changeNumber} />
      </div>

      <div className="mb-3">
        Str: {data.str}
        <input type="text" name="str" className="form-control" onChange={changeString} />
      </div>

      <div className="mb-3">
        Today: {data.today.toLocaleString()} <br />
      </div>

      <div className="mb-3">
        Avg: {data.avg} / {data.list.join(', ')} / {getAverage}
        <div className="input-group">
          <input type="text" name="avg" className="form-control" onChange={changeNumber} />
          <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A06Hook;
