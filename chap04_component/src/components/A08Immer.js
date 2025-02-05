import React, { useCallback, useState } from "react";

// npm i immer
// 대안 npm i use-immer (react 전용)
import { produce } from 'immer'     // 10.X
// import produce from 'immer'      // 9.X

function A08Immer() {
  const [person, setPerson] = useState({
    name: "",
    info: {
      address: "",
      arr: [10, 20, 30],
      etc: {
        one: "",
        two: "",
      },
    },
  });

  const changeName = useCallback(() => {
    // Arrow 함수에서 객체가 한 줄에 리턴되는 경우는 반드시 ()로 묶어야 한다
    setPerson((person) => ({ ...person, name: '놀부' }));
  }, []);
  const changeAddress = useCallback(() => {
    // 객체 내부에 객체 내부의 요소가 변경되는 경우 변경된 tree에 있는 모든 객체를 새로운 값으로 변경해야 한다
    setPerson((person) => {
      const newPerson = {
        ...person,
        info: {
          ...person.info,
          address: '서울'
        }
      };
      return newPerson;
    });
  }, []);
  const changeOne = useCallback(() => {
    // 객체 내부에 객체 내부의 요소가 변경되는 경우 변경된 tree에 있는 모든 객체를 새로운 값으로 변경해야 한다
    setPerson((person) => {
      const newPerson = {
        ...person,
        info: {
          ...person.info,
          etc: {
            ...person.info.etc,
            one: '복잡하다...'
          }
        }
      };
      return newPerson;
    });
  }, []);
  const addArray = useCallback(() => {
    // 객체 내부에 객체 내부의 요소가 변경되는 경우 변경된 tree에 있는 모든 객체를 새로운 값으로 변경해야 한다
    setPerson((person) => {
      const random = Math.ceil(Math.random() * 100);
      const newArr = person.info.arr.concat(random);

      const newPerson = {
        ...person,
        info: {
          ...person.info,
          arr: newArr
        }
      };
      return newPerson;
    });
  }, []);


  const changeNameImmer = useCallback((x) => {
    // draft는 person 객체을 deep copy 한 객체. 복사한 draft 객체를 수정 후 리턴
    setPerson((person) => {
      const newData = produce(person, draft => {
        draft.name = x;
      })
      return newData;
    });
  }, []);
  const changeAddressImmer = useCallback((x) => {
    setPerson((person) => {
      return produce(person, draft => {
        // 이 값은 리턴 값으로 사용하면 에러 발생
        draft.info.address = x;
      })
    });
  }, []);
  const changeOneImmer = useCallback(() => {
    setPerson((person) => {
      return produce(person, draft => {
        draft.info.etc.one = '간단하다...';
      })
    });
  }, []);

  const addArrayImmer = useCallback(() => {
    setPerson((person) => {
      const random = Math.ceil(Math.random() * 100);
      return produce(person, draft => {
        draft.info.arr.push(random);
      })
    });
  }, []);
  const updateArrayImmer = useCallback((idx, value) => {
    setPerson((person) => {
      return produce(person, draft => {
        draft.info.arr[idx] = value;
      })
    });
  }, []);
  const deleteArrayImmer = useCallback((idx) => {
    setPerson((person) => {
      return produce(person, draft => {
        draft.info.arr.splice(idx, 1)
      })
    });
  }, []);

  return (
    <div className="mb-5">
      <h3>A08 Immer</h3>

      <div className="mb-3">
        Name: {person.name}
        <br />

        Address: {person.info.address}
        <br />

        One: {person.info.etc.one}
        <br />

        Ary:{" "}
        {person.info.arr.map((item, i) => (
          <span key={i}>{item} </span>
        ))}
      </div>

      <div className="mb-3">
        <button onClick={changeName}>Name</button>
        <button onClick={changeAddress}>Address</button>
        <button onClick={changeOne}>One</button>
        <button onClick={addArray}>ADD</button>
        <br />

        <button onClick={() => changeNameImmer('흥부')}>Name</button>
        <button onClick={() => changeAddressImmer('부산')}>Address</button>
        <button onClick={changeOneImmer}>One</button>

        <button onClick={addArrayImmer}>ADD</button>
        <button onClick={() => updateArrayImmer(1, 3000)}>UPDATE</button>
        <button onClick={() => deleteArrayImmer(1)}>DELETE</button>
      </div>
    </div>
  );
}
export default A08Immer;
