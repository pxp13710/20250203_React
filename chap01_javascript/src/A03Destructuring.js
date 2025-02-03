const user = {
  name: 'NolBu',
  age: 30,
  address: 'Seoul',
};

// const name = user.name;
// const age = user.age;

// 객체는 { }, 배열은 [ ]로 변수 정의
// 객체는 정의하는 변수명이 객체의 key 이름과 동일해야 한다
const { name, age } = user;
console.log(name, age);

// 객체의 key 이름이 이미 변수로 정의되어 있는 경우 별칭을 사용
const { name: nickname, age: num } = user;
console.log(nickname, num);

// 객체도 없는 요소를 참조해도 에러 아님. undefined 출력
console.log(user.infor); // undefiend

// 기본값 할당 가능
const { name: x = 'Unknown', age: y = 0, info, tel = '000-0000-0000' } = user;
console.log(x, y, info, tel);
console.log('');

// key가 없으므로 정의하지 않은 임의의 변수명으로 받아 처리
const arr = ['A', 'B', 'C'];
const [a, b, c] = arr;
console.log(a, b, c);

// 없는 값은 undefined. 기본값 할당 가능
const [a1 = 0, b1 = 0, c1, d1, e1 = 0] = arr;
console.log(a1, b1, c1, d1, e1);

// 필요한 값만 참조 가능
const [, , c2] = arr;
console.log(c2);
console.log('');
