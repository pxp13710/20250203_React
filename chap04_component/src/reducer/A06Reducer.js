export const reducerFunc = (state, action) => {
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
export const init = {
  num: '',
  str: '',
  today: new Date(),
  avg: '',
  list: [],
}
