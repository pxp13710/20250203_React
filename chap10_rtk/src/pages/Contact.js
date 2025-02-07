import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

import { getContactAction, deleteContactAction } from '@store/contactStore';

function Contact() {
  const { contact, loading, error, statusData } = useSelector(store => store.contactStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { no } = useParams();

  // 시작하자마자 게시물 조회 => loading, error, contact가 상황에 따라 변경
  useEffect(() => {
    dispatch(getContactAction(no))
  }, [dispatch, no]);

  // 삭제 결과 => loading, error, statusData가 상황에 따라 변경
  useEffect(() => {
    if (statusData.status === 'success') {
      Swal.fire({ title: 'SUCCESS', text: '데이터 삭제 성공', icon: 'success' })
      navigate('/contactList')
    } else if (statusData.status === 'fail') {
      Swal.fire({ title: 'FAIL', text: '데이터 삭제 실패', icon: 'error' })
      navigate('/contactList')
    }
  }, [statusData.status, navigate]);

  if (loading) return <h3>Loading...</h3>
  if (error) return <h3>점검중... {error.message}</h3>
  return (
    <div>
      <h3>Get Contact</h3>

      <div>
        Name: <input type="text" className="form-control" disabled value={contact.name} />
        Tel: <input type="text" className="form-control" disabled value={contact.tel} />
        Address: <input type="text" className="form-control" disabled value={contact.address} />
      </div>
      <br />
      <button className="btn btn-outline-primary"
        onClick={() => navigate('/update')}>수정</button>
      <button className="btn btn-outline-primary"
        onClick={() => dispatch(deleteContactAction(contact.no))}>삭제</button>
    </div>
  )
}

export default Contact;
