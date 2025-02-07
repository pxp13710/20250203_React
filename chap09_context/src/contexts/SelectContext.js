import { createContext, useState } from "react";

// SelectContext.js
const SelectContext = createContext({
  state: {
    contextName: '',
    color: ''
  },
  action: {
    changeColor: () => { }
  }
});

// SelectContext의 Provider
function SelectContextProvider(props) {
  const [color, setColor] = useState('green');
  const value = {
    state: {
      contextName: 'Select Context',
      color,
    },
    action: {
      changeColor: (color) => setColor(color)
    }
  }
  return (
    <SelectContext.Provider value={value}>
      {props.children}
    </SelectContext.Provider>
  )
}
export { SelectContextProvider, SelectContext }