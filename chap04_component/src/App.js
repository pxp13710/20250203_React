import A01State from './components/A01State'
import A02Container from './components/A02Container'
import A03Event from './components/A03Event'
import A04CreateDOM from './components/A04CreateDOM'
import A05Hook from './components/A05Hook'

function App() {

  return (
    <div className="m-3">
      <h1>Chap04 Component</h1>

      <A05Hook></A05Hook>
      <A04CreateDOM></A04CreateDOM>
      <A03Event></A03Event>
      {/* children */}
      <A02Container></A02Container>
      <A01State></A01State>
    </div>
  );
}

export default App;
