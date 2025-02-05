import React, { useState } from 'react'

function A03Event() {
  const [data, setData] = useState({
    name: '',
    address: '',
    age: '',
    date: '2024-12-25',
    sports: 'baseball',
    isChecked: true,
    files: {},
    language: ['React', 'Vue'],
    baseball: '엘지',
    four: ['엘지', '두산'],
  });

  const changeString = (evt) => {
    // console.log(evt.target.name, evt.target.value)
    if (evt.target.value.trim().length <= 5) {          // 5글자까지만 입력
      const newData = { ...data, [evt.target.name]: evt.target.value };
      setData(newData);
    }
  }
  const changeNumber = (evt) => {
    let value = Number(evt.target.value);
    if (Number.isNaN(value)) value = 0;       // 보통 빈문자열 ''을 할당한다(화면에 아무것도 출력안됨)

    const newData = { ...data, [evt.target.name]: value };
    setData(newData);
  }

  const changeCheck = (evt) => {
    const newData = { ...data, [evt.target.name]: !data[evt.target.name] };
    setData(newData);
  }

  const changeLanguage = (evt) => {
    const value = evt.target.value;
    if (!data.language.includes(value)) {
      // data 내부의 language가 객체. 따라서 language를 새로운 객체로 이후에 data를 새로운 객체로
      // 생성하면서 새롭게 만들어진 language로 변경해서 모든것이 다 새로운 값으로 치환되게 정의
      const newLanguage = data.language.concat(value);    // 새로운 langulage
      const newData = { ...data, language: newLanguage }; // language도 새롭게, data도 새로운 값으로
      setData(newData);
    } else {
      const newLanguage = data.language.filter(item => item !== value);
      const newData = { ...data, language: newLanguage }; // language도 새롭게, data도 새로운 값으로
      setData(newData);
    }
  }

  const changeFile = (evt) => {
    const files = evt.target.files;
    // console.log(files);
    const newFiles = { name: files[0].name, size: files[0].size, type: files[0].type };

    // const newData = { ...data, files: files[0].name };
    const newData = { ...data, files: newFiles };
    setData(newData);
  }

  const changeSelect = (evt) => {
    const elems = evt.target.selectedOptions;   // 유사배열
    const arr = Array.from(elems);

    const newFour = arr.map(elem => elem.value);
    const newData = { ...data, four: newFour };
    setData(newData);
  }


  const sendData = (evt) => {
    // DOM 요소가 가지고 있는 기본 동작 자바스크립트를 취소
    evt.preventDefault();

    // console.log(data);    // 서버에 전송

    // JavaScript 객체를 JSON 값으로 변경
    const jsonData = JSON.stringify(data);
    console.log(jsonData);

    // JSON 값을 JavaScript 객체로 변경
    const jsData = JSON.parse(jsonData);
    console.log(jsData);
  };

  return (
    <div className="mb-5">
      <h3>B02 React Hook Form</h3>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name: {data.name}</label>
          {/* defaultValue => 동기화 안함, value => 동기화를 한다 */}
          <input type="text" id="name" name="name" className="form-control"
            value={data.name} onChange={changeString} />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address: {data.address}</label>
          <input type="text" id="address" name="address" className="form-control"
            defaultValue={data.address} onChange={changeString} />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age: {data.age}</label>
          {/* defaultValue => 동기화 안함, value => 동기화를 한다. 변경하면서 확인 */}
          <input type="text" id="age" name="age" className="form-control"
            value={data.age} onChange={changeNumber} />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date: {data.date}</label>
          <input type="date" id="date" name="date" className="form-control"
            value={data.date} onChange={changeString} />
        </div>

        <div className="mb-3">
          RadioButton: {data.sports}<br />
          <div className="form-check">
            <input type="radio" name="sports" value="baseball" id="baseball" className="form-check-input"
              onChange={changeString} defaultChecked={data.sports === 'baseball'} />
            <label htmlFor="baseball" className="form-check-label">야구</label>
          </div>
          <div className="form-check">
            <input type="radio" name="sports" value="soccer" id="soccer" className="form-check-input"
              onChange={changeString} defaultChecked={data.sports === 'soccer'} />
            <label htmlFor="soccer" className="form-check-label">축구</label>
          </div>
          <div className="form-check">
            <input type="radio" name="sports" value="basketball" id="basketball" className="form-check-input"
              onChange={changeString} defaultChecked={data.sports === 'basketball'} />
            <label htmlFor="basketball" className="form-check-label">농구</label>
          </div>
        </div>

        <div className="mb-3">
          CheckBox One: {data.isChecked ? '동의' : '동의 안함'}<br />
          <div className="form-check">
            <input type="checkbox" id="isChecked" name="isChecked" className="form-check-input"
              value={data.isChecked} onChange={changeCheck} defaultChecked={data.isChecked} />
            <label htmlFor="isChecked" className="form-check-label">동의</label>
          </div>
        </div>

        <div className="mb-3">
          CheckBox: {data.language.join(', ')}<br />
          <div className="form-check">
            <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input"
              defaultChecked={data.language.includes('Angular')} onChange={changeLanguage} />
            <label htmlFor="angular" className="form-check-label">앵귤러</label>
          </div>
          <div className="form-check">
            <input type="checkbox" name="language" value="React" id="react" className="form-check-input"
              defaultChecked={data.language.includes('React')} onChange={changeLanguage} />
            <label htmlFor="react" className="form-check-label">리엑트</label>
          </div>
          <div className="form-check">
            <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input"
              defaultChecked={data.language.includes('Vue')} onChange={changeLanguage} />
            <label htmlFor="vue" className="form-check-label">뷰</label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="file" className="form-label">File: {data.files.name || 'unknown'}</label>
          <input type="file" className="form-control" id="file" name="file" multiple
            onChange={changeFile} />
        </div>

        <div className="mb-3">
          SelectBox: {data.baseball}<br />
          <select name="baseball" className="form-control mb-2"
            onChange={changeString} value={data.baseball} >
            <option>한화</option>
            <option>NC</option>
            <option>두산</option>
            <option>엘지</option>
            <option>기아</option>
            <option>삼성</option>
            <option>SSG</option>
          </select>
        </div>

        <div className="mb-3">
          SelectBox Multi: {data.four.join(', ')}<br />
          <select name="four" multiple size="5" className="form-control mb-2"
            onChange={changeSelect} value={data.four}>
            <option>한화</option>
            <option>NC</option>
            <option>두산</option>
            <option>엘지</option>
            <option>기아</option>
            <option>삼성</option>
            <option>SSG</option>
          </select>
        </div>

        <button type="submit" onClick={sendData}>SEND</button>
      </form>
    </div>
  )
}

export default A03Event;
