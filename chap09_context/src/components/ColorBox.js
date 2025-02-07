import React, { useContext } from "react";

// context
import ColorContext from './../contexts/ColorContext'
import { SelectContext } from './../contexts/SelectContext'

function ColorBox() {
  // Consumer
  const colorCtx = useContext(ColorContext);
  const { state, action } = useContext(SelectContext);
  // console.log(colorCtx);

  return (
    <div className="mb-3">
      <div className="mb-3">
        <h3>{colorCtx.contextName}</h3>
        <div>
          Color Context Color: {colorCtx.color} <br />
          <button onClick={() => colorCtx.setColor('orange')}>Change</button>
        </div>
      </div>

      <div className="mb-3">
        <h3>{state.contextName}</h3>
        <div>
          Color Context Color: {state.color} <br />
          <button onClick={() => action.changeColor('BLUE')}>Change</button>
        </div>
      </div>
    </div>
  );
}
export default ColorBox;
