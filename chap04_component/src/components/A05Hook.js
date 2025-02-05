import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
// Hook은 React 16.8 버전에서 도입. 함수형 컴포넌트에서도 상태변수, 라이프사이클 메서드 구현 가능
// class를 이용한 컴포넌트 개발이 함수형으로 넘어오기 시작
function A05Hook() {
  // 1. useState: 상태 변수를 정의 
  // const [getter, setter] = useState(기본값);
  // 값 변경은 반드시 이벤트 발생 => setter를 이용해서 구현
  const [data, setData] = useState({
    num: 10,
    str: '',
    avg: '',
    list: []
  });
  const [today, setToday] = useState(new Date());


  // 2. useCallback: 함수 자체를 메모이제이션(캐시화)
  // useCallback은 메모리에 캐시화될때 내부에서 사용한 변수(상태변수 포함)값도 최초 로드될때 값을 기반으로만 동작
  //   따라서 내부에 사용한 변수가 변경되는 경우는 함수가 새롭게 생성될 필요가 있다 
  //    => 내부에서 사용한 변수(상태변수) 값이 갱신
  //    => 갱신된 값을 기반으로 함수가 실행 => 화면 반영
  // 이 작업을 실행할 변수, 메서드를 마지막 배열 []에 추가
  // const eventHandler = useCallback( 함수명() => {}, [의존관계, ...] )
  /*
  const changeNumber = useCallback((evt) => {
    let value = Number(evt.target.value);
    if (Number.isNaN(value)) value = '';
    const newData = { ...data, num: value };
    setData(newData);
  }, [data]);

  const changeString = useCallback((evt) => {
    setData({ ...data, str: evt.target.value });
  }, [data]);
  */

  // 가능하면 의존 관계가 없도록 작성할 필요가 있다
  const changeNumber = useCallback((evt) => {
    // let value = Number(evt.target.value);
    // if (Number.isNaN(value)) value = '';
    // const newData = { ...data, num: value };

    setData((x) => {
      // x는 현재 setDate의 getter 값이 주입된다. 즉 data의 현재 값 => { num: 10, str: '' }
      // console.log(x);

      let value = Number(evt.target.value);
      if (Number.isNaN(value)) value = '';
      return { ...x, [evt.target.name]: value };
    });
  }, []);

  const changeString = useCallback((evt) => {
    setData((data) => {
      return { ...data, str: evt.target.value }
    });
  }, []);

  const addList = useCallback(() => {
    setData((data) => {
      const newList = data.list.concat(data.avg);
      return { ...data, list: newList };
    })
  }, []);

  // 3. LifeCycle Hook: 최초 1번 또는 의존관계로 지정한 변수, 함수가 변경되는 경우 자동 실행
  // useEffect(() => { }, [의존관계], return () => {});
  // 의존관계 배열을 선언하지 않음 => useEffect 없이 기술한 것과 동일. 항상 재 실행된다
  // 의존관계가 빈 배열 [] => 최초 1번만 실행. 리로드시에는 실행되지 않는다
  // 의존관계에 상태변수, 훅을 사용한 함수가 지정된경우 => 상태변수, 함수가 변경되는 경우만 재 실행된다
  useEffect(() => {
    setTimeout(() => {
      setToday(new Date())
    }, 2000);

    // 변수 정리 등..
    // 언마운트시점에 실행 => useEffect 실행 => 클린업 함수 실행 => useEffect 실행
    return () => console.log('Good Bye~~~')
  }, [data.num]);

  // useEffect는 여러번 사용이 가능하다. 의존관계를 생각해서 분리해 기술한다(불필요한 재 실행을 방지)
  useEffect(() => {
    // document.querySelector('input[name="num"]').style.backgroundColor = 'orange';
    // numRef.current => document.querySelector('input[name="num"]')
    numRef.current.style.backgroundColor = 'lightgray';
  }, []);

  // 4. useMemo: 함수의 리턴값을 메모이제이션(캐시화)
  // View에서 함수의 결과값을 참조하는 경우 사용. 사용은 프로퍼티 형태로 사용한다(인수 전달이 안됨)
  // const 함수명 = useMemo( () => { }, [의존관계] )
  const getAverage = useMemo(() => {
    console.log('계산중...');
    if (data.list.length === 0) return 0;
    const total = data.list.reduce((acc, item) => {
      return acc + item;
    }, 0);

    return total / data.list.length;
  }, [data.list]);

  // 5. useRef: 값을 유지할 목적. useState와는 달리 값이 변경되도 리렌더링은 하지 않는다
  //          : JSX 내부의 DOM 요소에 대한 참조
  const [count, setCount] = useState(0);
  const cnt = useRef(100);

  // 연결하고자하는 DOM 요소에 <tag .... ref={numRef} ../> 형태로 지정한다
  // numRef.current는 지정한 요소의 참조값이 된다 =>  <tag .... ref={numRef} ../>
  const numRef = useRef(null);


  const increase = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  const decrease = useCallback(() => {
    setCount((count) => count - 1);
  }, []);

  const increaseCnt = useCallback(() => {
    // console.log(cnt.current)
    cnt.current = cnt.current + 1;        // 화면이 리렌더링되기 전까지 변경사항이 화면에 출력되지 않는다
  }, []);
  const decreaseCnt = useCallback(() => {
    cnt.current = cnt.current - 1;
  }, []);


  return (
    <div className="mb-5">
      <h3>A05 useState, useEffect</h3>

      <div className="mb-3">
        Count: {count} / {cnt.current}<br />
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <br />

        <button onClick={increaseCnt}>CNT +</button>
        <button onClick={decreaseCnt}>CNT -</button>
      </div>

      <div className="mb-3">
        Num: {data.num}
        <input type="text" name="num" className="form-control" onChange={changeNumber} ref={numRef} />
      </div>

      <div className="mb-3">
        Str: {data.str}
        <input type="text" name="str" className="form-control" onChange={changeString} />
      </div>

      <div className="mb-3">
        Today: {today.toLocaleString()}<br />
      </div>

      <div className="mb-3">
        Avg: {data.avg} / {data.list.join(' - ')} / {getAverage}
        <div className="input-group">
          <input type="text" name="avg" className="form-control" onChange={changeNumber} />
          <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A05Hook;
