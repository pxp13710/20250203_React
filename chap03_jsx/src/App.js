// JSX - JavaScript XML
// 1. XML 문법을 따라 종료 태그가 반드시 있어야 한다
// 2. JSX 구문은 "", ''로 묶어서 구현하지 않는다
/*
function Abc() {
  return <h1>Good Morning!!!</h1>;
}
export default Abc;
*/

/*
const greet = <h1>Good Morning!!!</h1>;
function Abc() {
  return greet;
}
export default Abc;
*/

// 3. 리턴되는 JSX 태그는 반드시 1개만 허용한다 (다중 태그는 에러)
/* // Error
function Abc() {
  return <h1>Good Morning!!!</h1>
  <div>This is Content</div>;
}
export default Abc;
*/

/*
function Abc() {
  return (
    <div>
      <h1>Good Morning!!!</h1>
      <div>This is Content</div>;
    </div>
  )
}
export default Abc;
*/
const elem = (
  <div>
    <h1>Good Morning!!!</h1>
    <div>This is Content</div>;
  </div>
);

function Abc() {
  return elem;
}
export default Abc;



/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
