import { useCallback, useState } from "react";

// 컴포넌트를 값으로 받음. 따라서 대문자로 시작해야 태그로 사용
const A07InnerTwo = (Comp) => {
  return function InnerComp(props) {
    // console.log(props)
    const [address, setAddress] = useState('서울');
    const changeAddress = useCallback((x) => {
      setAddress(x);
    }, []);

    return <Comp {...props} address={address} changeAddress={changeAddress} />
  }
}
export default A07InnerTwo;
