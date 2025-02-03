// 개별 export 된 요소를 import
// { } 내부의 변수명은 export 한 이름과 동일한 이름으로 정의.
// 이미 사용하는 변수명이 있으면 as로 별칭 사용 가능
import { name as nickname, age, check, arr, user, add } from './A04ExportOne.js';

// 하나의 이름으로 묶어서 사용. 지정한 "별칭.변수명" 형태로 사용
import * as one from './A04ExportOne.js';
// console.log(one);

// 외부 라이브러리 - export로 설정된 구문이 없다. 이전 라이브러리 형태
// import $ from './../node_modules/jquery/dist/jquery.js';
// console.log($);

// default - 중복되지 않는 임의의 변수명으로 정의
// two = { name: getName, total: getTotal, ....} 형태가 된다
// 반드시 default 변수가 먼저 정의되어야 한다
import two, { x, y } from './A04ExportTwo.js';
// import { x, y } from './A04ExportTwo.js';
// console.log(two);

// React에서는 undefined, null, Boolean 값은 화면에 출력하지 않는다
const dom = `
  <div>
    Name: ${name} / ${nickname} / ${one.name}<br>
    Age: ${age} / ${one.age}<br>
    Check: ${check}<br>
    Array: ${arr[0]} / ${one.arr[1]} / ${arr[2]}<br>
    User: ${user.name} / ${one.user.age} / ${user.address}<br>
    onAdd: ${add(10, 20)} / ${one.add(10, 20)}<br>

    <hr>

    Name: ${two.name()}<br>
    onTotal: ${two.total(90, 80)}<br>
    onAvg: ${two.getAvg(170, 2)}<br>
    X: ${x}, Y: ${y}
  </div>
`;

// console 출력
console.log(dom);

// root에 출력
document.getElementById('root').innerHTML = dom;
