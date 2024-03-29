import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Header from '../Components/Header'
import numbers from '../data/numbers.json'
import letters from '../data/data.json'
import words from '../data/data.json'
import data from '../Arabic.json'

const Register = () => {
  const navigate = useNavigate()

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [notion, setNotion] = useState(false)

  const sendInfos = async (e)=>{
    e.preventDefault()
    try {
      const response = await axios.post('https://eshara-backaend.cyclic.app/user/register', {
        name: name,
        email : email,
        password : password,
        numbers: numbers,
        letters: letters,
        data: data,
        words: words,
        score: 0
      })
      if(response){
        console.log("User registered successfully")
        
        localStorage.setItem('userName', name)

        setEmail("")
        setName("")
        setPassword("")
        navigate('/login')
      }

    } catch (error) {
      console.error("sign up failed: ", error.message)
    }
  }
  const isLoggedIn = localStorage.getItem('token')
  return (
    <div className='container'>
        <Header />
        <div className="register-cont">
        <h1 style={{textAlign: "center"}} className='login-title'>Sign Up</h1><br/>
            <form className='register-form' onSubmit={sendInfos}>
                <label for="name">Name:</label><br />
                <input type="text" name="name" id="name" 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className='name-form' required/><br />
                <label for="email">Email:</label><br />
                <input type="email" name="email" id="email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className='email-form' required/><br />
                <label for="password">Password:</label><br />
                <input type="password" name="password" id="password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className='psw-form' required/><br />
                <button type='submit' className='login-btn'>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default Register