import { useCallback, useState } from "react";

// 컴포넌트를 값으로 받음. 따라서 대문자로 시작해야 태그로 사용
const A07InnerOne = (Comp) => {
  return function InnerComp(props) {
    // console.log(props)
    const [age, setAge] = useState(100);
    const changeAge = useCallback((x) => {
      setAge(x);
    }, []);

    return <Comp {...props} age={age} changeAge={changeAge} />
  }
}
export default A07InnerOne;
