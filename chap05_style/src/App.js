import A01Style from './components/A01Style'
import A02StyleModule from './components/A02StyleModule'
import A03Classnames from './components/A03Classnames'
import A04StyledComponent from './components/A04StyledComponent'

function App() {
  return (
    <div className="m-3">
      <h1>Chap05 Style</h1>

      <A04StyledComponent></A04StyledComponent>
      <A03Classnames></A03Classnames>
      <A02StyleModule></A02StyleModule>
      <A01Style></A01Style>
    </div>
  );
}

export default App;
