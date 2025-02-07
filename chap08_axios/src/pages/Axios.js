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

  const getContactListAsync = useCallback(async (no = 1, size = 5) => {
    const params = { pageno: no, pagesize: size };
    const headers = { 'Content-Type': 'application/json' };

    try {
      const resp = await axios.get(baseURL, { params, headers });
      setData(JSON.stringify(resp.data, '', 4));
    } catch (err) {
      console.error(err);
    }
  }, []);

  const getContact = useCallback((no) => {
    // axios.get('URL', {params: {key: value, key: value,..}, headers: {key: value, ..}, timeout: 3000 });
    // axios.get(baseURL)

    axios({
      method: 'GET',
      url: baseURL + no,
      params: {},
      data: '',             // post, put, patch에서 서버에 전송할 값
      headers: {},          // 헤더 정보
      timeout: 3000,
    })
      .then((resp) => {
        // console.log(resp);
        setData(JSON.stringify(resp.data, '', 4));
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  const addContact = useCallback(() => {
    // axios.post('URL', 서버에전송할 값, {params: {key: value, key: value,..}, headers: {key: value, ..}, timeout: 3000 });

    // 데이터 직렬화
    const data = JSON.stringify({
      name: "강감찬",
      "tel": "010-2222-3339",
      "address": "서울시"
    });
    const headers = { 'Content-Type': 'application/json' };

    axios.post(baseURL, data, { headers, timeout: 3000 })
      .then((resp) => {
        setData(JSON.stringify(resp.data, '', 4));
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  const updateContact = useCallback((no) => {
    // axios.put('URL', 서버에전송할 값, {params: {key: value, key: value,..}, headers: {key: value, ..}, timeout: 3000 });
    // axios.patch('URL', 서버에전송할 값, {params: {key: value, key: value,..}, headers: {key: value, ..}, timeout: 3000 });

    // 데이터 직렬화
    const data = JSON.stringify({
      no,
      name: "이순신",
      "tel": "010-2222-2222",
      "address": "한산"
    });
    const headers = { 'Content-Type': 'application/json' };

    axios.put(baseURL + no, data, { headers, timeout: 3000 })
      .then((resp) => {
        setData(JSON.stringify(resp.data, '', 4));
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  const deleteContact = useCallback((no) => {
    // axios.delete('URL' + no );
    axios.delete(baseURL + no)
      .then((resp) => {
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
      <button onClick={() => getContactListAsync(2, 10)}>DATA LIST ASYNC</button>
      <button onClick={() => getContact(2)}>GET</button>
      <button onClick={addContact}>ADD</button>
      <button onClick={() => updateContact(1738888218838)}>UPDATE</button>
      <button onClick={() => deleteContact(1738888218838)}>DELETE</button>
      <br />
      <br />

      <textarea cols="100" rows="15" defaultValue={data}></textarea>
    </div>
  );
}
export default Axios;
