import React from 'react'
// vite에서는 npm i prop-types 로 설치 먼저..
import PropType from 'prop-types'

// function A02Props({ className, type, }) {
function A02Props(props) {
  // props 값은 읽기 전용(immutable) 값이다. 즉 자식 컴포넌트에서 수정 불가
  // console.log(props);
  const { className = 'btn', type, age = 0, check, arr = [], user = {}, onAdd = () => { },
    setAge = () => { }, addArray = () => { },
  } = props;

  const getToday = () => {
    const today = new Date();
    switch (type) {
      case 'date':
        return today.toLocaleDateString();
      case 'time':
        return today.toLocaleTimeString();
      default:
        return today.toLocaleString();
    }
  }

  return (
    <div className="mb-5">
      <h3>A02Props</h3>

      <div className="mb-3">
        <button className={className}>ClassName</button> <br />
        Today: {getToday()}<br />
        Age: {age + 1} / {typeof age}<br />
        Check: {check ? 'T' : 'F'}<br />

        {/* 
          객체는 객체 자체가 존재하지 않으면 에러. 3번재는 arr 값을 전달하지 않음 따라서 undefind
          참조가 {undefined[0]} 형태가 된다 => 에러 
          기본값을 할당하던가 옵셔널체이닝 연산자 사용
        */}
        Array: {arr?.[0]} / {arr?.[1]} / {arr[2]}<br />

        Object: {user?.name} / {user?.age} / {user.address} <br />
        Function: {onAdd(10, 20)}
      </div>

      <div>
        <button onClick={() => setAge(300)}>Age</button>
        <button onClick={addArray}>Array</button>
      </div>
    </div>
  )
}

// props로 넘어오는 값의 타입 체크
A02Props.propTypes = {
  className: PropType.string, //.isRequired,
  today: PropType.oneOfType([PropType.string, PropType.number]),
  age: PropType.number,
  check: PropType.bool,
  array: PropType.array,
  user: PropType.object,
  onAdd: PropType.func,
  setAge: PropType.func,
}

export default A02Props
