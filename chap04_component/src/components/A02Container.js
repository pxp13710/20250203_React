/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import A02Props from './A02Props'

import A01State from './A01State'

/*
  package.json => 프로젝트 전체에 반영됨 (하지말자)

  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ],
    "rules": {
      "no-unused-vars": "off"
    }
  },

*/

function A02Container() {
  const [age, setAge] = useState(30);
  const [array, setArray] = useState([20, 21]);
  const [user, setUser] = useState({ name: 'B', age: 2 });

  // JavaScript에서는 함수도 객체(값)으로 취급된다
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  // setter를 이용해 getter 값 수정 => App 리렌더링 => 자식 컴포넌트 모두 리렌더링 => 자식은 새로운 값 참조
  // setter를 보통 직접 전달하지 않음.
  // 함수로 가드를 정의한 후 전달
  const addArray = () => {
    const random = Math.ceil(Math.random() * 100);
    const newArr = array.concat(random);
    setArray(newArr);
  }

  return (
    <>
      {/* 
        부모 컴포넌트(App)가 하위 컴포넌트(A02Props)에게 값을 전달.
        전달은 속성을 이용한다. 따라서 커스텀 컴포넌트는 html 속성이 값으로 전달된다
        전달된 값은 하위 컴포넌트 함수의 첫번재 매개변수로 전달된다.
        속성의 값이 없이 기술하면 Boolean 값 true가 전달된다. 속성 자체가 없으면 false
        객체를 직접 기술하는 경우는 {{}} 형태가 된다. 첫번째는 바인딩, 두번째가 객체의 시작을 나타낸다
        부모가 가지고 있는 상태변수는 직접 수정 불가. 
          함수 형태로 작성해서 자식 컴포넌트에 전달(주소값 전달) =>
          하위 컴포넌트가 전달한 함수 실행(주소에 있는 함수 실행) => 
          부모의 함수 실행 => getter 수정 => 리 렌더링 => 자식 리 렌더링
      */}
      <A02Props className="btn btn-primary" type="date" age={10} check={true} arr={array}
        user={{ name: 'A', age: 1 }} onAdd={onAdd} setAge={setAge} addArray={addArray}>
        <>
          <h5>부모가 전달한 View: {age}</h5>
          <div>Hello World - 자식 컴포넌트의 props.children 위치에 표시된다</div>
        </>
      </A02Props>

      <A02Props className="btn btn-danger" type="time" age={age} check arr={array}
        user={user} onAdd={onAdd} setAge={setAge} addArray={addArray}>
        <>
          <img src="images/machu.jpg" alt="machu" />
        </>
      </A02Props>

      <A02Props>
        {/* 자신의 상태변수 등을 값으로 전달 가능 */}
        <A01State type="time" />
      </A02Props>
    </>
  )
}

export default A02Container
