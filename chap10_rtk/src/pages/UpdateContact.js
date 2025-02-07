import React from 'react'

function UpdateContact() {
  return (
    <div>
      <h3>Update Contact</h3>

      <div>
        Name: <input type="text" className="form-control" name="name" />
        Tel: <input type="text" className="form-control" name="tel" />
        Address: <input type="text" className="form-control" name="address" />
      </div>
      <br />
      <button className="btn btn-outline-primary">UPDATE</button>
    </div>
  )
}

export default UpdateContact
