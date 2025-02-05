import React from "react";
import A07InnerOne from './A07InnerOne'

function A07OuterOne(props) {
  return (
    <div className="mb-5">
      <h3>A07 Outer One</h3>

      <div className="mb-3">
        props: {props.name}
      </div>

      <div className="mb-3">
        Age: {props.age}
      </div>

      <button onClick={() => props.changeAge(200)}>AGE</button>
    </div >
  );
}

export default A07InnerOne(A07OuterOne);
