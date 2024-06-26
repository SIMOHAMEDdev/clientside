import React, { useState, useEffect } from 'react'
import Arabic from "../Arabic.json"
import { HiPlay } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { supabase } from '../SupabaseClient'
import { RiseLoader } from 'react-spinners';
import axios from 'axios';

const LevelState = ({ active, level }) => {
  const [userData, setUserData] = useState([])
  const userId = localStorage.getItem('user_id')
  const email = localStorage.getItem('email')
  const navigate = useNavigate()

  const data = Arabic

  useEffect(()=>{
    const update = async () => {
        const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single();
  
        if(error){
          console.log(error.error_description || error.message)
        }else{
          if (data) {
            // console.log('User data:', data);
            setUserData(data.data)
          }
        }
    }
    update()
  })

  

  return (
    <div className={active ? 'levelstate active' : 'levelstate'}>
        <h1>:المستوى {level}</h1><br />
        <section>
            {!userData.length ? Object.keys(userData).map((key)=>{
                if(key === level){
                  return Object.keys(userData[key]).map((lesson, index)=>{
                  return (<div className='fadeInDown'  key={index}>
                  <label className='lesson fadeInDown'>{lesson} <HiPlay onClick={()=>{navigate(`/roadmap/learning/${level}/${userData[key][lesson].type}/${userData[key][lesson].lesson}/${lesson}`)}} className='play_btn'/></label>
                    <p className='fadeInDown'
                    style={{fontSize: "20px", margin: "10px 0", display: "flex", alignItems: "center", justifyContent:"space-between"}}
                    >{userData[key][lesson].title} <span>{userData[key][lesson].progress}</span>
                    </p>
                    <div className="progress_bar fadeInDown"><div className="progress progress.animated" style={{width: userData[key][lesson].width_progress}}></div></div>
                    </div> )
                })} 
              }) : <RiseLoader color='#fff'/>}
        </section>
    </div>
  )
}

export default LevelState
