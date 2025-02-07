import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios'
import pMinDelay from 'p-min-delay'
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

function AddContact() {

  // <Route path="/contact/:no" element={<GetContact />} />의 ":no" 값 취득
  const { no } = useParams();

  // 이동에 관련 Hook
  const navigate = useNavigate();

  const baseURL = "http://localhost:8000/contacts/";
  const [contact, setContact] = useState(
    { no: '', name: '', tel: '', address: '', photo: '' }
  );
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const changeContact = useCallback((evt) => {
    setContact((contact) => {
      return { ...contact, [evt.target.name]: evt.target.value }
    })
  }, []);

  const getContact = useCallback(async () => {
    setLoading(true);
    try {
      const resp = await pMinDelay(axios.get(baseURL + no), 1000);
      setContact(resp.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
    // no 값이 변경될때마다 실행될 필요가 있다
  }, [no]);

  const updateContact = useCallback(async () => {
    setLoading(true);
    try {
      const resp = await axios.put(baseURL + contact.no, contact);
      // setContact(resp.data);
      if (resp.data.status === 'success') {
        Swal.fire({ title: 'SUCCESS', text: '데이터 수정 성공', icon: 'success' });
      } else if (resp.data.status === 'fail') {
        Swal.fire({ title: 'FAIL', text: '데이터 수정 실패', icon: 'error' });
      }
      navigate('/contactList')
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [contact, navigate]);

  useEffect(() => {
    getContact();
  }, [getContact]);

  if (error) return <h3>점검중... {error.message}</h3>
  if (loading) return <h3>Loading...</h3>

  return (
    <div>
      <h3>Update Contact</h3>

      <div>
        Name: <input type="text" className="form-control" name="name"
          value={contact.name} onChange={changeContact} />
        Tel: <input type="text" className="form-control" name="tel"
          value={contact.tel} onChange={changeContact} />
        Address: <input type="text" className="form-control" name="address"
          value={contact.address} onChange={changeContact} />
      </div>
      <br />
      <button className="btn btn-outline-primary" onClick={updateContact}>UPDATE</button>
    </div>
  );
}
export default AddContact;
