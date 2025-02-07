import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios'

// npm i p-min-delay
import pMinDelay from 'p-min-delay'
import { Link } from "react-router-dom";

function GetContactList() {
  const baseURL = "http://localhost:8000/contacts/";
  const [contactList, setContactList] = useState(
    { pageno: '', pagesize: '', totalcount: '', contacts: [] }
  );
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getContactList = useCallback(async (no = 1, size = 10) => {
    setLoading(true);
    try {
      const resp = await pMinDelay(axios.get(baseURL, { params: { pageno: no, pagesize: size } }), 1000);
      setContactList(resp.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getContactList(1, 5);
  }, [getContactList]);

  if (error) return <h3>점검중... {error.message}</h3>
  if (loading) return <h3>Loading...</h3>
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Tel</th>
            <th>Address</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {contactList.contacts.map(contact => (
            <tr key={contact.no}>
              <td>{contact.no}</td>
              <td><Link to={'/contact/' + contact.no}>{contact.name}</Link></td>
              <td>{contact.tel}</td>
              <td>{contact.address}</td>
              <td><img src={contact.photo} alt="사진" width="70" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default GetContactList;
