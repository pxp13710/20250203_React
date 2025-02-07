import React from 'react';
import { NavLink } from 'react-router-dom';

const isActive = (props) => {
  return props.isActive ? { color: 'orange', fontWeight: 'bold' } : {}
}

function Header() {
  return (
    <div>
      <NavLink to="/" style={isActive}>COUNT STORE</NavLink> | {' '}
      <NavLink to="/todoList" style={isActive}>TODO STORE</NavLink> |{' '}
      <NavLink to="/contactList" style={isActive}>CONTACT STORE</NavLink> |{' '}
    </div>
  );
}

export default Header;
