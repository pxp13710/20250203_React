import React, { useCallback, useState } from "react";

// 현재 컴포넌트만 사용하려면 module로 import
// css 파일은 "파일명.module.css" 형태로 지정한다
// import 한 default 이름은 변수명이 된다. 참조는 "변수명.클래스명" 형태
// module로 지정한 클래스에 :global을 붙이면 전역 클래스로 변경된다 (A02Style1.module.css 파일 참조)
import one from './css/A02Style1.module.css'
import two from './css/A02Style2.module.css'

function A02StyleModule() {
  const [check, setCheck] = useState(true);
  const changeCheck = useCallback(() => {
    setCheck((x) => !x);      // x는 상태변수 check의 현재 값
  }, []);

  return (
    <div className="mb-5">
      <h3 className={one.title}>A02 Style <span className="innerColor">Module</span> Component</h3>
      <h3 className={`${two.title} ${two.reverse}`}>A02 Style Module Component</h3>
      <h3 className={[two.title, two.reverse].join(' ')}>A02 Style Module Component</h3>

      <h3 className={check ? `${two.title} ${two.reverse}` : ''}>A02 Style <span className="innerColor">Module</span> Component</h3>
      <input type="checkbox" value={check} onChange={changeCheck} />적용
    </div>
  );
}

export default A02StyleModule;
