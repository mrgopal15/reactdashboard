import React, { useState, useRef } from 'react'
import { withRouter, Link } from 'react-router-dom'

const initialState = {
  email: '',
  password: '',
}

export default withRouter(props => {
  
  const [formData, setData] = useState(initialState)
  const emailInput = useRef()
  const passInput = useRef()

  const handleChange = e => setData({
    ...formData,
    [e.target.name]: e.target.value
  })

  const validateEmail = email => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email);
  }

  const handleSubmit = () => {
    let error = 0
    emailInput.current.style.border = '1px solid #ced4da'
    passInput.current.style.border = '1px solid #ced4da'

    if (formData.email === '' || !validateEmail(formData.email)) {
      emailInput.current.style.border = '1px solid #b60000'
      error++
    }
    if (formData.password === '') {
      passInput.current.style.border = '1px solid #b60000'
      error++
    }

    if (error > 0) return false

    props.history.push('/dashboard') 
  }

  return (
    <div className="form-signin">
      <h1 className="h3 mb-3 font-weight-normal text-center">Sign in</h1>
      <div className="form-group form-label-group">
        <input type="email" id="inputEmail" ref={emailInput} name="email" onChange={e => handleChange(e)} className="form-control" placeholder="Email" />
        <label htmlFor="inputEmail">Email</label>
      </div>
      <div className="form-group form-label-group">
        <input id="inputPassword" type="password" ref={passInput} name="password" onChange={e => handleChange(e)} className="form-control" placeholder="Password" />
        <label htmlFor="inputPassword">Password</label>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button onClick={handleSubmit} className="btn btn-primary btn-block">Sign in</button>
      <Link to="/forgotpassword">Forgot Password ?</Link>
    </div>
  );
})
