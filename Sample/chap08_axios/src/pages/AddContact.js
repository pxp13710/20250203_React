import React from "react";

function AddContact() {

  return (
    <div>
      <h3>Add Contact</h3>
      Name: <input type="text" className="form-control" name="name" />
      Tel: <input type="text" className="form-control" name="tel" />
      Address: <input type="text" className="form-control" name="address" />
      <br />
      <button className="btn btn-outline-primary">ADD</button>
    </div>
  );
}

export default AddContact;
