import React, { useState, useCallback } from "react";
import axios from 'axios'

function Axios() {
  const baseURL = "http://localhost:8000/contacts/";
  const [data, setData] = useState('');

  const getContactList = useCallback((no = 1, size = 5) => {
    // axios.get('URL', {params: {key: value, key: value,..}, headers: {key: value, ..}, timeout: 3000 });
    // axios.get(baseURL)

    // params => path?pageno=no&pagesize=size
    // axios.get(baseURL, { params: { pageno: no, pagesize: size }, headers: { 'Content-Type': 'application/json' } })

    const params = { pageno: no, pagesize: size };
    const headers = { 'Content-Type': 'application/json' };

    axios.get(baseURL, { params, headers, timeout: 3000 })
      .then((resp) => {
        // console.log(resp);
        setData(JSON.stringify(resp.data, '', 4));
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <div>
      <h3>Axios Test</h3>
      <button onClick={() => getContactList(1, 10)}>DATA LIST</button>
      <button>DATA LIST ASYNC</button>
      <button>GET</button>
      <button>ADD</button>
      <button>UPDATE</button>
      <button>DELETE</button>
      <br />
      <br />

      <textarea cols="100" rows="15" defaultValue={data}></textarea>
    </div>
  );
}
export default Axios;
