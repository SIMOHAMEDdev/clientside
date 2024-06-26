import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../SupabaseClient'
import axios from 'axios'
import Header from '../Components/Header'


const Login = () => {
  const navigate = useNavigate();


  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const sendInfo = async (e) => {
    e.preventDefault()

    let { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })
    if(error){
      alert(error.error_description || error.message)
    }else{
          localStorage.setItem('token', password)
          localStorage.setItem('email', email)
          navigate('/roadmap')
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
            style={{width: "15pc", padding: "20px 20px", borderRadius: "40px",
             border: "2px solid #fff"}}
            onChange={(e)=>setEmail(e.target.value)}
            required/><br />
            <label for="password" style={{margin: "0"}}>Password:</label><br />
            <input type="password" 
            name="password" 
            id="password" 
            value={password} 
            className='psw-form' 
            style={{width: "15pc", padding: "20px 20px", borderRadius: "40px",
             border: "2px solid #fff"}}
            onChange={(e)=>setPassword(e.target.value)}
            required/><br />
            <button type='submit' className='login-btn action_btn'
            style={{padding: "10px 0", borderRadius: "25px", border: "2px solid #fff",
             cursor: "pointer"}}>Login</button>
        </form>
        <Link to='/register'>Register</Link>
    </div>
</div>
)
}

export default Login
