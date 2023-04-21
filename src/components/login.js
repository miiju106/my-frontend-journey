import React from 'react'
import './register.css';
// import './App.css';
import ImageIcon from '@mui/icons-material/Image';

const Login = () => {
  return (
    <div className='form-main'>
        <div className="form-container">
            <h3>Login in</h3>
            <form>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button type="submit">Log in</button>
            </form>
            <p>You do not have an account? <span>Register</span></p>
        </div>
        </div>
  )
}

export default Login
