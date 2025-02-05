import React, { useCallback, useState } from "react";

// CSS 파일은 import '경로명/파일명.확장자' 형태로 import
import './css/A01Style.css';

// npm i sass 설치 필수. 설치하지 않으면 import 구문에서 에러 발생
// sass 라이브러리 설치후 반드시 프로젝트를 재 시작해야 한다
import './css/A01Style.scss';

function A01Style() {
  const myStyle = { backgroundColor: 'lightgray', color: 'white', fontSize: '20px', padding: '10px' };
  const [style, setStyle] = useState({ backgroundColor: 'lightgray', color: 'white', fontSize: '20px', padding: '10px' });

  const myCSS = 'title color';
  const [css, setCss] = useState('title color');

  const title = 'title';
  const color = 'color';
  const [check, setCheck] = useState(true);

  const enterEvent = useCallback(() => {
    setStyle((style) => {
      return { ...style, backgroundColor: 'orange' };
    })
  }, []);
  const leaveEvent = useCallback(() => {
    setStyle((style) => {
      return { ...style, backgroundColor: 'lightgray' };
    })
  }, []);

  const enterCSSEvent = useCallback(() => {
    setCss('title')
  }, []);
  const leaveCSSEvent = useCallback(() => {
    setCss('title color')
  }, []);


  return (
    <div className="mb-5">
      {/* style 정의. HTML 방식의 style은 에러. 반드시 { key: value, ..} 형태의 객체이어야 한다 */}
      <h3 style={{ backgroundColor: 'lightgray', color: 'white', fontSize: '20px', padding: '10px' }}>A01 Style</h3>
      <h3 style={myStyle}>A01 Style</h3>
      <h3 style={style} onMouseEnter={enterEvent} onMouseLeave={leaveEvent}>A01 Style</h3>

      {/* class 정의. class는 자바스크립트 예약어로 사용 불가. className으로 이용한다 
        값 지정은 import한 CSS의 클래스명을 그대로 이용한다
      */}
      {/* <h3 class="title color">A01 Style</h3> console에 에러가 표시됨 */}
      <h3 className="title color">A01 Style</h3>
      <h3 className={'title color'}>A01 Style</h3>
      <h3 className={myCSS}>A01 Style</h3>
      <h3 className={css} onMouseEnter={enterCSSEvent} onMouseLeave={leaveCSSEvent}>A01 Style</h3>

      <h3 className={`${title} ${color}`}>A01 Style</h3>
      <h3 className={check ? 'title color' : ''}>A01 Style</h3>

      {/* 사용은 일반 CSS의 클래스와 동일한 방식으로 사용한다 */}
      <h3 className="scssTitle">A01 Style</h3>
    </div >
  );
}

export default A01Style;
