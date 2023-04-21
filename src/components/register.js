import React from 'react'
// import React, { useEffect, useState } from 'react'
// import './global.css';
import './register.css';
// import './App.css';
import ImageIcon from '@mui/icons-material/Image';
import { useState } from 'react';

const Register = () => {
    const [formOutput, setFormOutput] = useState({displayname:"", email:"", password:"", avatar:"" })
    const [formError, setFormError] = useState({});

    const handleChange= (e) =>{
        const name= e.target.name;
        const value = e.target.value;
        const file = e.target.file;
        setFormOutput({...formOutput, [name]:value})
        console.log(formOutput)

    }
const handleSubmit = (e) =>{
    e.preventDefault();
    setFormError(validateInput);
}

const validateInput = () =>{
    let error = {}

    let regex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/i;

    let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


    if(!formOutput.displayname){
        error.displayname="Enter your display name"
    }
    if(!formOutput.email){
        error.email="Enter your email address"
    }else if(!regex.test(formOutput.email)){
        error.email="Enter a valid email address";
    }
    if(!formOutput.password){
        error.password="Enter your password"
    }else if(!passwordPattern.test(formOutput.email)){
        error.password="Must contain at least one number and one uppercase and lowercase letter, and at least 5 or more characters";
    }
    
    return error;
    
}
  return (
    <div className='form-main'>
        <div className="form-container">
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
            <p>{formError.displayname}</p>
                <input type="text" placeholder="display name" name="displayname" value={formOutput.displayname} onChange={handleChange}/>
                <p>{formError.email}</p>
                <input type="email" placeholder="email" name="email"value={formOutput.email} onChange={handleChange}/>
                <p>{formError.password}</p>
                <input type="password" placeholder="password" name="password" value={formOutput.password} onChange={handleChange}/>
                <input style={{display:"none"}} type="file" id="file" className='hidden' />
                 <label htmlFor="file" name="avatar" file={formOutput.avatar} onChange={handleChange} >
                     <ImageIcon/>
                    <span>Add Avatar</span>
                </label>
                <button type="submit" >Sign up</button>
            </form>
            <p>You have an account? <span>Login</span></p>
        </div>
        </div>
  )
}

export default Register