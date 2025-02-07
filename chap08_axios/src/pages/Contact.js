import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios'
import pMinDelay from 'p-min-delay'
import { useNavigate, useParams } from "react-router-dom";

// npm i sweetalert2
import Swal from 'sweetalert2'

function GetContact() {
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

  const deleteContact = useCallback(async () => {
    setLoading(true);
    try {
      const resp = await axios.delete(baseURL + no);
      // setContact(resp.data);
      if (resp.data.status === 'success') {
        Swal.fire({ title: 'SUCCESS', text: '데이터 삭제 성공', icon: 'success' });
      } else if (resp.data.status === 'fail') {
        Swal.fire({ title: 'FAIL', text: '데이터 삭제 실패', icon: 'error' });
      }
      navigate('/contactList')
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
    // no 값이 변경될때마다 실행될 필요가 있다
  }, [no, navigate]);

  useEffect(() => {
    getContact();
  }, [getContact]);

  if (error) return <h3>점검중... {error.message}</h3>
  if (loading) return <h3>Loading...</h3>

  return (
    <div>
      <h3>Get Contact</h3>

      <div>
        Name: <input type="text" className="form-control" disabled value={contact.name} />
        Tel: <input type="text" className="form-control" disabled value={contact.tel} />
        Address: <input type="text" className="form-control" disabled value={contact.address} />
      </div>
      <br />
      <button className="btn btn-outline-primary" onClick={() => navigate('/updateContact/' + contact.no)}>수정</button>
      <button className="btn btn-outline-primary" onClick={deleteContact}>삭제</button>
    </div>
  );
}
export default GetContact;
