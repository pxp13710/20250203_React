import { useState } from "react";

function A01State() {
  // 상태변수 - useState는 함수 최초 실행시 1번만 등록된다
  // const [getter, setter] = useState(초기값);     // return [getter, setter()]
  // getter는 값 참조로만 사용
  // setter는 값 변경을 위해 사용
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [check, setCheck] = useState(false);
  const [arr, setArray] = useState([10, 11]);
  const [user, setUser] = useState({ name: 'NolBu', age: 30 });

  const changeName = () => setName('흥부');
  const changeAge = (x) => setAge(x);
  const changeCheck = () => setCheck(!check);

  const addArray = () => {
    const random = Math.ceil(Math.random() * 100);
    // setArray(arr.push(random));          // Error

    // 주소값이 변경되도록 새로운 배열 객체를 할당해야 한다(불변성)
    // const newArr = [...arr, random];     // OK
    const newArr = arr.concat(random);
    setArray(newArr);
  }
  const updateArray = (i, value) => {
    /*
    const newArr = arr.map((item, idx) => {
      if (idx === i) return value;   // 넘어온 값으로 치환
      else return item;             // 기존값을 그대로 이용
    });
    */
    const newArr = arr.map((item, idx) => (idx === i) ? value : item);
    setArray(newArr);
  }
  const deleteArray = (i) => {
    /*
    const newArr = arr.filter((item, idx) => {
      if (idx !== i) return true;   // 기존값을 그대로 이용
      else return false;            // 매칭되는 값은 반환하지 않음
    });
    */
    const newArr = arr.filter((_, idx) => (idx !== i));
    setArray(newArr);
  }

  const addObject = (key, value) => {
    // 지정한 키의 값이 없으면 추가, 있으면 값을 덮어씀
    /*
    const newUser = { ...user, [key]: value };
    setUser(newUser);
    */
    setUser({ ...user, [key]: value });
  }
  const updateObject = (key, value) => {
    // 지정한 키의 값이 없으면 추가, 있으면 값을 덮어씀
    /*
    const newUser = { ...user, [key]: value };
    setUser(newUser);
    */
    setUser({ ...user, [key]: value });
  }
  const deleteObject = (key) => {
    // 지정한 키의 값이 삭제
    delete user[key];
    /*
    const newUser = { ...user };    // 지정한 키를 삭제 후 남은 것만 복사 새로운 객체 생성
    setUser(newUser);
    */
    setUser({ ...user });
  }


  return (
    <div className="mb-5">
      <h3>A01 State</h3>

      <div className="mb-3">
        Name: {name}<br />
        Age: {age}<br />
        Check: {check ? 'T' : 'F'}<br />
        Array: {arr[0]} / {arr[1]} / {arr[2]}<br />
        User: {user.name} / {user.age} / {user.address}<br />
      </div>

      <div>
        <button onClick={changeName}>Name</button>
        <button onClick={() => changeAge(100)}>Age</button>
        <button onClick={changeCheck}>Check</button>

        <button onClick={addArray}>Add Array</button>
        <button onClick={() => updateArray(1, 2000)}>Update Array</button>
        <button onClick={() => deleteArray(1)}>Delete Array</button>

        <button onClick={() => addObject('address', 'Seoul')}>Add Object</button>
        <button onClick={() => updateObject('address', 'Busan')}>Update Object</button>
        <button onClick={() => deleteObject('address')}>Delete Object</button>
      </div>
    </div>
  )
}
export default A01State;
