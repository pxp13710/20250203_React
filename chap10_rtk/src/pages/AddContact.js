import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

import { changeContact, addContactAction } from '@store/contactStore';

function AddContact() {
  const { contact, loading, error, statusData } = useSelector(store => store.contactStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (statusData.status === 'success') {
      Swal.fire({ title: 'SUCCESS', text: '데이터 입력 성공', icon: 'success' })
      navigate('/contactList')
    } else if (statusData.status === 'fail') {
      Swal.fire({ title: 'FAIL', text: '데이터 입력 실패', icon: 'error' })
      navigate('/contactList')
    }
  }, [statusData.status, navigate]);

  if (loading) return <h3>Loading...</h3>
  if (error) return <h3>점검중... {error.message}</h3>

  return (
    <div>
      <h3>Add Contact</h3>

      Name: <input type="text" className="form-control" name="name"
        value={contact.name} onChange={(evt) => dispatch(changeContact(evt.target))} />
      Tel: <input type="text" className="form-control" name="tel"
        value={contact.tel} onChange={(evt) => dispatch(changeContact(evt.target))} />
      Address: <input type="text" className="form-control" name="address"
        value={contact.address} onChange={(evt) => dispatch(changeContact(evt.target))} />
      <br />
      <button className="btn btn-outline-primary" onClick={() => dispatch(addContactAction(contact))}>ADD</button>
    </div>
  )
}
export default AddContact
