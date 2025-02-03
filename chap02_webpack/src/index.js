import { name as nickname, age, check, arr, user, add } from './A04ExportOne.js';
import * as one from './A04ExportOne.js';
import two, { x, y } from './A04ExportTwo.js';

// webpack 기반에서는 node_modules이후의 패스만 기술한다
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

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

// jQuery
$('#app').html(dom);
