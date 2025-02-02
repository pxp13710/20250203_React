import React from "react";
import { Link } from "react-router-dom";

function ChildComp() {
  return (
    <div>
      <h3>Children Component</h3>
      <br />

      <div>
        <Link to="">ONE</Link> | {' '}
        <Link to="">TWO</Link> |{' '}
        <Link to="">THREE</Link>
      </div>

      <hr />
    </div>
  );
};
export default ChildComp;
