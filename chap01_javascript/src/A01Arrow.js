console.log('--------- Arrow ---------');
// 함수 리터럴. 함수 표현식
const onAdd = function (x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
};

const onMin = function (x, y) {
  return `${x} - ${y} = ${x - y}`;
};
onAdd(10, 20);
console.log(onMin(10, 20));
console.log('');

// ES2015(ES6)
// 함수 리터럴 방식만 변경 가능
// 1. function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다
const one = (x, y) => {
  console.log(`${x} + ${y} = ${x + y}`);
};

const two = (x, y) => {
  return `${x} - ${y} = ${x - y}`;
};
one(20, 20);
console.log(two(20, 20));
console.log('');

// 2. { } 내부의 구문이 1줄만 존재하는 경우 { }와 return 생략 가능 (한 줄에 기술)
// => 뒤가 구문이면 실행
// => 뒤가 값(표현식)이면 리턴 값으로 취급한다
const three = (x, y) => console.log(`${x} + ${y} = ${x + y}`);
const four = (x, y) => `${x} - ${y} = ${x - y}`;

three(30, 20);
console.log(four(30, 20));
console.log('');

// 3. 매개변수가 1개인 경우 () 생략 가능
// 2 * 2 * 2 => 2 ** 3 (ES2016)
const five = x => 2 ** x;
console.log(five(3));
console.log('');

// 4. this가 존재하지 않는다
window.name = 'Window';
window.age = 1000;

var obj = {
  name: 'HungBu',
  age: 25,
  child: ['one', 'two'],
  info: {
    tel: '010-1234-5678',
    add: 'Seoul',
  },
  // ES2015
  view() {
    console.log(`${this.name}님의 나이는 ${this.age}세 입니다`);
  },
  // 상위 갹체(obj)의 this를 자신의 this로 사용. Arrow 함수 자체는 this 참조가 없음
  display: () => {
    console.log(`${this.name}님의 나이는 ${this.age}세 입니다`);
  },
};
window.obj.view();
window.obj.display();
console.log('');

let arr = [10, 11, 100, 101, 1000];

arr.forEach(function (item, idx, self) {
  console.log(item, idx, self);
  self[idx] = self[idx] + 1;
});
console.log(arr);

arr = [10, 11, 100, 101, 1000];
let total = 0;
arr.forEach(item => (total = total + item));
console.log(total);
console.log('');

// map => 요소를 순환해서 반환된 값으로 새로운 배열을 생성 (기존배열은 변경 없음 - 불변성)
// 리엑트에서 요소 변경에 사용
const makeNewArray = (i, value) => {
  return arr.map((item, idx) => (i === idx ? value : item));
};
const mapArr = makeNewArray(1, 3000);
console.log(mapArr);
console.log(arr);
console.log('');

// filter => 요소를 순환해서 반환값이 true인 요소의 값만을 이용해 새로운 배열 생성 (기존배열은 변경 없음 - 불변성)
// 리엑트에서 배열 요소 삭제에 사용
const fiterArray = i => {
  return arr.filter((item, idx) => i !== idx);
};
const filterArr = fiterArray(1);
console.log(filterArr);
console.log(arr);
