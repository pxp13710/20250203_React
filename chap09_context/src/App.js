import { useState } from 'react'
import ColorBox from './components/ColorBox'
import SelectColor from './components/SelectColor'
import TodoTemplate from './components/TodoTemplate'

// context
import ColorContext from './contexts/ColorContext'
import { SelectContextProvider } from './contexts/SelectContext'
import { TodoContextProvider } from './contexts/TodoContext'

function App() {
  const [color, setColor] = useState('gray');

  const value = {
    contextName: 'ColorBox Context',
    color,
    setColor
  };

  return (
    <div className="m-3">
      <h1>Chap10 Context</h1>

      {/* 
        Provider => 자식 컴포넌트에서 사용할 값을 제공하는 제공자
        Consumer => 자식 컴포넌트에서 Provider 제공한 값을 사용하는 수신자 (Hook으로 사용) 
      */}
      <ColorContext.Provider value={value}>

        <SelectContextProvider>
          <ColorBox></ColorBox>
          <SelectColor></SelectColor>
        </SelectContextProvider>

      </ColorContext.Provider>

      <hr />

      <TodoContextProvider>
        <TodoTemplate></TodoTemplate>
      </TodoContextProvider>
    </div>
  );
}

export default App;
