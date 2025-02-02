// npm i react-router-dom react-loader-spinner 

// index에 BrowserRouter 세팅 필요
function App() {
  const user = { name: 'HungBu', age: 20 };
  const arr = [10, 11];
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  return (
    <div className="m-3">
      <h1>React Router</h1>
    </div>
  );
}

export default App;
