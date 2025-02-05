import React, { useRef, useState } from "react";
import A04MakeTable from './A04MakeTable'
import A04MakeTwo from './A04MakeTwo'

// var A = 4;

function A04CreateDOM() {
  // console.log(window);
  const baseArray = ["NC", "두산", "엘지", "KT", "키움"];

  // 최초 1번만 실행. 값은 유지되는 hook.
  // useState와는 달리 값은 유지, 값이 변경되는 경우 리 렌더링은 하지 않는다
  const cnt = useRef(4);
  // console.log(cnt);

  const [baseObject, setBaseObject] = useState([
    { id: 1, team: "NC", value: "NC" },
    { id: 2, team: "두산", value: "Doosan" },
    { id: 3, team: "엘지", value: "LG" },
  ]);

  const [data, setData] = useState({
    teamOne: "",
    teamTwo: "",
    team: "",
    isChecked: false,
  });

  const changeValue = (evt) => {
    setData({ ...data, [evt.target.name]: evt.target.value });
  }
  const addTeam = () => {
    setBaseObject(baseObject.concat({ id: cnt.current++, team: "삼성", value: "Samsung" }));
  }
  const showHide = () => {
    setData({ ...data, isChecked: !data.isChecked });
  }

  const changeTeam = (evt) => {
    setData({ ...data, team: evt.target.value });
  }
  const addBaseArray = () => {
    baseArray.push(data.team);
  }

  // const makeTable = () => {                // makeTable()
  // const MakeTable = () => {                   // <MakeTable />
  //   return baseObject.map(item => (
  //     <tr key={item.id}>
  //       <td>{item.id}</td>
  //       <td>{item.team}</td>
  //       <td>{item.value}</td>
  //     </tr>
  //   ))
  // }

  return (
    <div className="mb-5">
      <h3>A04 Make DOM</h3>

      <div className="mb-3">
        SelectBox: {data.teamOne}
        <br />
        <select name="teamOne" className="form-control" onChange={changeValue}>
          <option>선택해주세요</option>
          {
            // map으로 순환하면서 표시할 JSX를 반환하도록 구현한다
            // 시작되는 태그 루트에 key 속성을 중복되지 않는 값으로 선언해야 한다
            baseArray.map((item, idx) => {
              return <option key={idx}>{item}</option>
            })
          }
        </select>
      </div>

      <div className="mb-3">
        SelectBox: {data.teamTwo}
        <select name="teamTwo" className="form-control" value={data.teamTwo} onChange={changeValue}>
          <option value="">선택해주세요</option>
          {
            baseObject.map(item => <option key={item.id} value={item.value}>{item.team}</option>)
          }
        </select>
      </div>

      <div className="mb-3">
        <table className="table">
          <thead>
            <tr>
              <th>NO</th>
              <th>Team</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {
              baseObject.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.team}</td>
                  <td>{item.value}</td>
                </tr>
              ))
            }
          </tbody>

          <tbody>
            {/* <MakeTable /> */}
            <A04MakeTable baseObject={baseObject} />
          </tbody>

          <tbody>
            {baseObject.map(item => <A04MakeTwo key={item.id} item={item} />)}
          </tbody>

        </table>
        <button className="btn btn-outline-primary btn-sm" onClick={addTeam}>ADD TEAM</button>
      </div>

      {data.isChecked &&
        <div className="input-group mb-3">
          <input type="text" className="form-control" value={data.team} onChange={changeTeam} />
          <button className="btn btn-outline-primary btn-sm" onClick={addBaseArray}>ADD</button>
        </div>
      }

      <button className="btn btn-outline-primary btn-sm" onClick={showHide}>
        {data.isChecked ? 'HIDE' : 'SHOW'}
      </button>
    </div>
  );
}
export default A04CreateDOM;
