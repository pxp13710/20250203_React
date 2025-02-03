import two from './A04ExportTwo.js';
// JavaScript => ESM - ECMAScript Module
// CommonJS => Node에서 사용하던 모듈 방식 (JavaScript에서는 사용 불가. Node에서만 사용)

// 개별 Export -> 다른 외부 JS 파일에서 참조 가능하도록 설정
export const name = '놀부';
export const age = 30;
export const check = true;

const arr = [10, 20];
const user = { name: '흥부', age: 20 };
const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

// 묶어서 개별 Export - as로 변수명을 변경할 수 있음
export { arr, user, onAdd as add };

console.log(two.name());
