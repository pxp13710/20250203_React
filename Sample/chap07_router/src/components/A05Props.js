import React from 'react'

function PropsComp(props) {
  const { name, age } = props;

  return (
    <div>
      <h3>Props</h3>

      <div>
        Name: {name}<br />
        Age: {age + 100}<br />
      </div>
    </div>
  )
}
export default PropsComp;
