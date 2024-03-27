import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Header from '../Components/Header'

const Login = () => {
  const navigate = useNavigate();


  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const sendInfo = async (e)=>{
    e.preventDefault()
    try {
      let response = await axios.post('http://localhost:3000/user/login', {
        email: email,
        password: password
      })
      if(!response){
        alert("Invalid Email or Password")
      }
      else {
        const data = response.data
        localStorage.setItem('token', data.token)
        setUserData(data)
        localStorage.setItem('user_id', data.id)
        navigate('/roadmap')
        setEmail("")
        setPassword("")
      }
    } catch (error) {
      console.error(error)
    }
  }

  const isLoggedIn = localStorage.getItem('token')
  
  return (
  <div className='container'>
    <Header />
    <div className="login-cont">
        <h1 style={{textAlign: "center"}} className='login-title'>Login</h1><br/>
        <form className='login-form' onSubmit={sendInfo}>
            <label for="email" style={{margin: "0"}}>Email:</label><br />
            <input type="email"
            name="email" 
            id="email" 
            value={email} 
            className='email-form'
            onChange={(e)=>setEmail(e.target.value)}
            required/><br />
            <label for="password" style={{margin: "0"}}>Password:</label><br />
            <input type="password" 
            name="password" 
            id="password" 
            value={password} 
            className='psw-form' 
            onChange={(e)=>setPassword(e.target.value)}
            required/><br />
            <button type='submit' className='login-btn'>Login</button>
        </form>
        <Link to='/register'>Register</Link>
    </div>
</div>
)
}

export default Login