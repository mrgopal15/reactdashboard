import React, { useState, useRef } from 'react'
import { withRouter, Link } from 'react-router-dom'

export default withRouter(props => {
  
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(false)
  const emailInput = useRef()

  const validateEmail = email => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email);
  }

  const handleSubmit = () => {
    let error = 0
    emailInput.current.style.border = '1px solid #ced4da'

    if (email === '' || !validateEmail(email)) {
      emailInput.current.style.border = '1px solid #b60000'
      error++
    }

    if (error > 0) return false

    setStatus(true)
  }

  return (
    <div className="form-signin forgot-pass">
      <h1 className="h3 mb-3 font-weight-normal text-center">Forgot Password</h1>
      <p className="text-center">Enter email to retrieve password</p>
      <div className="form-label-group">
        <input type="email" id="inputEmail" ref={emailInput} name="email" onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Email" />
        <label htmlFor="inputEmail">Email</label>
      </div>
      <button onClick={handleSubmit} className="btn btn-primary btn-block">Submit</button>
      {status && <div className="alert alert-success text-center">Password sent to your email..!!</div>}
      <Link to="/">Go Back</Link>
    </div>
  );
})
