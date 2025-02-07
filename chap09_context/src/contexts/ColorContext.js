import { createContext } from "react";

// ColorContext.js
// Java의 interface처럼 골격만 정의한다
// 값 세팅은 자식 컴포넌트를 감싸는 곳에서 Provider를 이용해 구현
const ColorContext = createContext({
  contextName: '',
  color: '',
  setColor: () => { }
});
export default ColorContext;
