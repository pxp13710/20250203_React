import React from "react";
import { Link } from "react-router-dom";

function ContactHeader() {
  return (
    <div>
      <nav className="nav mb-3 pb-2 border-bottom">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/axios" className="nav-link">Axios</Link>
        <Link to="/contactList" className="nav-link">Get Contact List</Link>
        <Link to="/addContact" className="nav-link">Add Contact</Link>
      </nav>
    </div>
  );
}
export default ContactHeader;
