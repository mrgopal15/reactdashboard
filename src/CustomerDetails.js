import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import CustomerTable from './CustomerTable'
import CustomerModal from './CustomerModal'
import Customers from './assets/customers.json'

const initialState = {
  name: '',
  email: '',
  age: '',
  company: '',
  phone: '',
  key: ''
}

export default () => {

  const [modalIsOpen, handleModal] = useState(false)
  const [customerData, setCustomerData] = useState(Customers)
  const [formData, setData] = useState(initialState)

  const handleDelete = val => setCustomerData(customerData.filter(v => v.name !== val.name))

  let openModal = (val, key) => {
    setData({ name: val.name, email: val.email, age: val.age, company: val.company, phone: val.phone, key })
    handleModal(true)
  }

  const closeModal = () => handleModal(false)

  const handleUpdate = () => {
    setCustomerData(customerData.map((v, k) => {
      if(formData.key === k) 
        return { name: formData.name, email: formData.email, age: formData.age, company: formData.company, phone: formData.phone }
      else 
        return v
    }))
    handleModal(false)
  }

  return (
    <>
      <CustomerModal 
        closeModal={closeModal} 
        modalIsOpen={modalIsOpen} 
        handleUpdate={handleUpdate} 
        formData={formData}
        setData={setData}
      />
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main role="main" className="col-sm-12 customer">
            <h2 className="text-center">Customer Details</h2>
            <CustomerTable customerData={customerData} openModal={openModal} handleDelete={handleDelete} />
          </main>
        </div>
      </div>
    </>
  )
}