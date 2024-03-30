import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Numbers from '../Components/Numbers'
import axios from 'axios'
import Letters from '../Components/Letters'
import Words from '../Components/Words'
import Sidebar from '../Components/Sidebar'

const LearningDashboard = () => {
    const userId = localStorage.getItem('user_id')
    const [letters, setLetters] = useState([])
    const [numbers, setNumbers] = useState([])
    const [words, setWords] = useState([])
    const [data, setData] = useState([])
    const {level, type, lesson} = useParams()

  useEffect(()=>{
    const getLetters = async () => {
      try {
        const response = await axios.get(`https://uptight-gold-vestments.cyclic.app/user/getuserdata/${userId}`)
          const letrs = response.data.letters
        if(response){
          setLetters(letrs)
          setNumbers(response.data.numbers)
          setWords(response.data.words)
          setData(response.data)
        }
      } catch (error) {
        console.error(error)
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
