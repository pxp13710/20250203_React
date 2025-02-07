import React, { useCallback, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

function AddContact() {
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

  const addContact = useCallback(async () => {
    setLoading(true);
    try {
      const resp = await axios.post(baseURL, contact);
      // setContact(resp.data);
      if (resp.data.status === 'success') {
        Swal.fire({ title: 'SUCCESS', text: '데이터 입력 성공', icon: 'success' });
      } else if (resp.data.status === 'fail') {
        Swal.fire({ title: 'FAIL', text: '데이터 입력 실패', icon: 'error' });
      }
      navigate('/contactList')
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [contact, navigate]);

  if (error) return <h3>점검중... {error.message}</h3>
  if (loading) return <h3>Loading...</h3>
  return (
    <div>
      <h3>Add Contact</h3>
      <div>
        Name: <input type="text" className="form-control" name="name"
          value={contact.name} onChange={changeContact} />
        Tel: <input type="text" className="form-control" name="tel"
          value={contact.tel} onChange={changeContact} />
        Address: <input type="text" className="form-control" name="address"
          value={contact.address} onChange={changeContact} />
      </div>
      <br />
      <button className="btn btn-outline-primary" onClick={addContact}>ADD</button>
    </div>
  );
}

export default AddContact;
