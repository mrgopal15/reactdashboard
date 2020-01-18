import React from 'react'
import Modal from 'react-modal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    padding               : '15px',
    transform             : 'translate(-50%, -50%)'
  }
}

export default props => {
  let { formData, setData, modalIsOpen, handleUpdate, closeModal } = props

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
      <h5>
        Edit Details
        <button className="close" onClick={closeModal}>
          <i className="ion ion-md-close" />
        </button>
      </h5>
      <div className="form-signin forgot-pass">
        <div className="form-label-group">
          <input value={formData.name} type="text" id="inputName" name="name" onChange={e => setData({ ...formData, [e.target.name]: e.target.value })} className="form-control" placeholder="Name" />
          <label htmlFor="inputName">Name</label>
        </div>
        <div className="form-label-group">
          <input value={formData.email} type="email" id="inputEmail" name="email" onChange={e => setData({ ...formData, [e.target.name]: e.target.value })} className="form-control" placeholder="Email" />
          <label htmlFor="inputEmail">Email</label>
        </div>
        <div className="form-label-group">
          <input value={formData.age} type="text" id="inputAge" name="age" onChange={e => setData({ ...formData, [e.target.name]: e.target.value })} className="form-control" placeholder="Age" />
          <label htmlFor="inputAge">Age</label>
        </div>
        <div className="form-label-group">
          <input value={formData.company} type="text" id="inputCompany" name="company" onChange={e => setData({ ...formData, [e.target.name]: e.target.value })} className="form-control" placeholder="Company" />
          <label htmlFor="inputCompany">Company</label>
        </div>
        <div className="form-label-group">
          <input value={formData.phone} type="text" id="inputPhone" name="phone" onChange={e => setData({ ...formData, [e.target.name]: e.target.value })} className="form-control" placeholder="Phone" />
          <label htmlFor="inputPhone">Phone</label>
        </div>
        <button onClick={handleUpdate} className="btn btn-primary btn-block">Update</button>
      </div>
    </Modal>
  )
}