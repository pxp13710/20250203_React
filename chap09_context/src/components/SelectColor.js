/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'

// context
import ColorContext from './../contexts/ColorContext'
import { SelectContext } from './../contexts/SelectContext'

function SelectColor() {
  const colorCtx = useContext(ColorContext);
  const { state, action } = useContext(SelectContext);

  const colors = ['red', 'orange', 'green', 'blue', 'yellow'];
  const style = { width: '50px', height: '50px', background: 'gray', cursor: 'pointer' };

  return (
    <div>
      <div className="mb-3">
        <h3>{colorCtx.contextName}</h3>
        <div>
          Color Context Color: {colorCtx.color} <br />
          <button onClick={() => colorCtx.setColor('RED')}>Change</button>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        {colors.map(color =>
          <div key={color} style={{ ...style, backgroundColor: color }} onClick={() => action.changeColor(color)}>
            {color}
          </div>)}
      </div>
    </div>
  )
}
export default SelectColor
