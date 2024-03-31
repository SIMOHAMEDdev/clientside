import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from '../SupabaseClient'
import axios from 'axios'
import Header from '../Components/Header'
import numbers from '../data/numbers.json'
import letters from '../data/data.json'
import words from '../data/moves_data.json'
import data from '../Arabic.json'

const Register = () => {
  const navigate = useNavigate()

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [notion, setNotion] = useState(false)

  const sendInfos = async (e) => {
    e.preventDefault()
    let { data, error } = await supabase.auth.signUp({
      name: name,
      email: email,
      password: password
    })
    if(error){
      alert(error.error_description || error.message)
    }else{
      const { error } = await supabase
      .from('users')
      .insert([{
        email: email
      }])
        if(error){
          alert(error.error_description || error.message)
        }else{
          navigate('/login')
        }
    }
  }

  // const sendInfos = async (e)=>{
  //   e.preventDefault()
  //   try {
  //     const response = await axios.post('http://localhost:5000/user/register', {
  //       name: name,
  //       email : email,
  //       password : password,
  //       numbers: numbers,
  //       letters: letters,
  //       data: data,
  //       words: words,
  //       score: 0
  //     })
  //     if(response){
  //       console.log("User registered successfully")
        
  //       localStorage.setItem('userName', name)

  //       setEmail("")
  //       setName("")
  //       setPassword("")
  //       navigate('/login')
  //     }

  //   } catch (error) {
  //     alert("Error")
  //     console.error("sign up failed: ", error.message)
  //   }
  // }
  const isLoggedIn = localStorage.getItem('token')
  return (
    <div className='container'>
        <Header />
        <div className="register-cont">
        <h1 style={{textAlign: "center"}} className='login-title'>Sign Up</h1><br/>
            <form className='register-form' onSubmit={sendInfos}>
                <label for="name">Name:</label><br />
                <input type="text" name="name" id="name" 
                style={{width: "15pc", padding: "20px 20px", borderRadius: "40px",
                border: "2px solid #fff", margin: "-10px 0 20px 0"}}
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className='name-form' required/><br />
                <label for="email">Email:</label><br />
                <input type="email" name="email" id="email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                style={{width: "15pc", padding: "20px 20px", borderRadius: "40px",
                border: "2px solid #fff", margin: "-10px 0 20px 0"}}
                className='email-form' required/><br />
                <label for="password">Password:</label><br />
                <input type="password" name="password" id="password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                style={{width: "15pc", padding: "20px 20px", borderRadius: "40px",
             border: "2px solid #fff", margin: "-10px 0 20px 0"}}
                className='psw-form' required/><br />
                <button type='submit' className='login-btn action_btn'
                style={{padding: "10px 0", borderRadius: "25px", border: "2px solid #fff",
                cursor: "pointer", width: "18pc", marginTop: "20px"}}>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default Register
