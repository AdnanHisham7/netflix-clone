import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  return (
    loading?<div className="login-spinner">
      <img src={spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className='login-form'>
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ?
            <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} /> : <></>}

          <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />

          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

          <button>{signState}</button>
          <div className='form-help'>
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign Up" ? <p>Already have account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p> : <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
