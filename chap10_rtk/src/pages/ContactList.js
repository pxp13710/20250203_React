import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

import { getContactListAction } from '@store/contactStore'

const GetContactList = () => {
  const { loading, error, contactList } = useSelector(store => store.contactStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getContactListAction({ no: 1, size: 5 }))
  }, [dispatch]);

  if (loading) return <h3>Loading...</h3>
  if (error) return <h3>점검중... {error.message}</h3>

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Tel</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {contactList.contacts.map(contact => (
            <tr key={contact.no}>
              <td>{contact.no}</td>
              <td><Link to={'/contact/' + contact.no}>{contact.name}</Link></td>
              <td>{contact.tel}</td>
              <td>{contact.address}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-outline-primary btn-sm" onClick={() => navigate('/add')}>ADD</button>
    </div>
  )
}

export default GetContactList
