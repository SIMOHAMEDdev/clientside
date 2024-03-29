import React, {useState, useEffect} from 'react'
import words from '../data/moves_data.json'
import { IoClose, IoCheckmark } from "react-icons/io5";
import Video from '../VideoComponent.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import Arabic from '../Arabic.json'
import axios from 'axios';


const Words = ({lesson, level, userData, data}) => {
    // const [Data, setData] = useState(userData.data)
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [wrong, setWrong] = useState(null)
    const [correct, setCorrect] = useState(null)
    const [next, setNext] = useState(false)
    const [clicked, setClicked] = useState(null)
    const received = data.length === 0 ? false : true
    const navigate = useNavigate()
    const currentLetter= received && data[lesson - 1][currentLetterIndex];
    const [jsonData, setJsonData] = useState([])
    const userId = localStorage.getItem('user_id')
    const {course} = useParams()

    const calculateAnswered = async (data) => {
        const correct = []
        var newData = []
            for(let i = 0 ; i < jsonData[lesson - 1].length ; i++){
              const status = jsonData[lesson - 1][i].status
              if(status){
                correct.push(status)
              }
            }
          data[level][course].progress = data[level][course].progress.replace(/^\d+(?=\/)/, correct.length)
          newData = data
          const response = await axios.put(`http://localhost:5000/user/putwords/${userId}`, 
              { words: jsonData, 
                data: newData
              })
    }

    const checkResponse = async (clicked, answer)=> {
        const newData = [...data]
        if(clicked === answer){
          newData[lesson - 1][currentLetterIndex].status = true
          console.log("Correct!")
          alert("Thats right the answer is: " + currentLetter.answer)
          setNext(true)
        }else if(clicked !== answer){
          newData[lesson - 1][currentLetterIndex].status = false
          console.log("Wrong!")
          alert("the answer is: " + currentLetter.answer)
          setNext(true)
        }
        setJsonData(newData)
      }

      useEffect( ()=>{
        const fnc = async () => {
          if(next){
          if(currentLetterIndex === words[lesson - 1].length - 1){
              navigate('/roadmap')
            }
              calculateAnswered(userData.data)
              setCurrentLetterIndex(currentLetterIndex + 1);
              setNext(false)
        //   const response = await axios.put(`http://localhost:5000/user/putnumbers/${userId}`, 
        //   {numbers: jsonData, data: Data})
        }
      }
        fnc()
      }, [lesson, currentLetterIndex, next])

  return (
    <div className='game_template'>
            <Video video={currentLetter.image_path}/>
            <section className='ul_choices1'>
                <h6  style={{margin: "0", fontSize: "26px"}}>{currentLetter.move}</h6>
                <div style={{display: "flex", gap: '30px'}}>
                    <IoClose className='choose_btn' onClick={()=>{setClicked(false)
                    checkResponse(false, currentLetter.isCorrect)}} />
                    <IoCheckmark className='choose_btn' onClick={()=>{setClicked(true)
                    checkResponse(true, currentLetter.isCorrect)}} />
                </div>
            </section>
    </div>
  )
}

export default Words