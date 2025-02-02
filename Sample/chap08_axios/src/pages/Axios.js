import React, { useState } from "react";

function Axios() {
  const baseURL = "http://localhost:8000/contacts/";
  const [data, setData] = useState();

  return (
    <div>
      <h3>Axios Test</h3>
      <button>DATA LIST</button>
      <button>DATA LIST ASYNC</button>
      <button>GET</button>
      <button>ADD</button>
      <button>UPDATE</button>
      <button>DELETE</button>
      <br />
      <br />

      <textarea cols="100%" rows="15"></textarea>
    </div>
  );
}
export default Axios;
