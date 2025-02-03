// 개별 참조 형태로 구현
console.log([10, 11, 100]);
console.log([10, 11, 100][0], [10, 11, 100][1], [10, 11, 100][2], [10, 11, 100][100]);
console.log(...[10, 11, 100]);
console.log('NolBu');
console.log(...'NolBu');
console.log('');

// ...rest는 나머지 매개변수를 의미. 이전의 argumensts라는 내부 변수와 비슷
function spreadFun(a, b, c, d, e, ...rest) {
  console.log(`a => ${a}`);
  console.log(`b => ${b}`);
  console.log(`c => ${c}`);
  console.log(`d => ${d}`);
  console.log(`e => ${e}`);
  console.log(`rest => ${rest} / ${rest.length}`);
}

spreadFun(0, ...[10, 20, 30], 40, ...[50, 60, 70]);
console.log('');

// 배열 합치기.
const arrOne = [10, 20, 30];

// 복사
// const one = ...arrOne;           const one = 10, 20, 30;
const one = [...arrOne]; // const one = [10, 20, 30];
console.log(one === arrOne); // false
one[0] = 'Good Morning';
console.log(one, arrOne);
console.log('');

const arrTwo = [1, 2, 3, ...arrOne];
console.log(arrTwo);
console.log('');

// 불변성
const two = [...arrOne, 1000];
console.log(two, arrOne);

// 리엑트에서 배열의 맨 뒤에 요소 추가에 사용
// const three = arrOne.concat(2000);
const three = arrOne.concat([2000, 2001]);
console.log(three, arrOne);
console.log('');

// Object
const objOne = {
  id: 1,
  name: 'NolBu',
};

// 복사
// const four = ...objOne;        // const four = id: 1,  name: 'NolBu';
const four = { ...objOne }; // const four = { id: 1,  name: 'NolBu' };
console.log(objOne === four); // false
four.id = 1000;
console.log(objOne, four);
console.log('');

// 중복 키는 뒤에 오는 값으로 변경된다
const objTwo = {
  id: 2,
  address: 'Seoul',
  ...objOne,
};
console.log(objTwo);

// 원래 값을 유지하려면 먼저 푼다
const objThree = {
  ...objOne,
  id: 3,
  address: 'InChen',
};
console.log(objThree);
