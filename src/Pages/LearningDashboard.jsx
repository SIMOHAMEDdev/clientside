import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../SupabaseClient'
import Numbers from '../Components/Numbers'
import axios from 'axios'
import Letters from '../Components/Letters'
import Words from '../Components/Words'
import Sidebar from '../Components/Sidebar'

const LearningDashboard = () => {
    const userId = localStorage.getItem('user_id')
    const email = localStorage.getItem('email')
    const [letters, setLetters] = useState([])
    const [numbers, setNumbers] = useState([])
    const [words, setWords] = useState([])
    const [data, setData] = useState([])
    const {level, type, lesson} = useParams()

  useEffect(()=>{
    const getLetters = async () => {
      const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

      if(error){
        alert(error.error_description || error.message)
      }else{
        setLetters(data.letters)
        setWords(data.words)
        setNumbers(data.numbers)
        setData(data)
      }
    }
    getLetters()
  }, [])
  
  return (
    <div style={{display: 'flex'}}>
      <Sidebar />
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginLeft: '24%'}}>
          {type === 'letter' && (<Letters lesson={lesson} userData={data} data={letters} level={level}/>)}
          {type === "number" && (<Numbers lesson={lesson} userData={data} data={numbers} level={level}/>)}
          {type === "word" && (<Words lesson={lesson} level={level} userData={data} data={words}/>)}
      </div>
    </div>
  )
}

export default LearningDashboard
