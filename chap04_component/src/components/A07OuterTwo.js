import React from "react";
import A07InnerOne from './A07InnerOne'
import A07InnerTwo from './A07InnerTwo'

function A07OuterTwo(props) {
  return (
    <div className="mb-5">
      <h3>A07 Outer Two</h3>

      <div className="mb-3">
        props: {props.name}
      </div>

      <div className="mb-3">
        Age: {props.age} / {props.address}
      </div>

      <button onClick={() => props.changeAge(500)}>AGE</button>
      <button onClick={() => props.changeAddress('부산')}>ADDRESS</button>
    </div >
  );
}

export default A07InnerTwo(A07InnerOne(A07OuterTwo));
