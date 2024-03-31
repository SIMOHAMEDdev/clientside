import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import dataa from "../data/data.json"
import axios from 'axios'
import { RiseLoader } from 'react-spinners'
import { supabase } from '../SupabaseClient'

const Letters = ({ lesson, userData, data, level }) => {
    const [Data, setData] = useState(userData.data)
    const [letters, setLetters] = useState([])
    const arr = ['أ', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 
    'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي']
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [jsonData, setJsonData] = useState([])
    const [isCorrect, setIsCorrect] = useState("")
    const [wrong, setWrong] = useState(null)
    const [correct, setCorrect] = useState(null)
    const [next, setNext] = useState(false)
    const [clicked, setClicked] = useState(false)
    const received = data.length === 0 ? false : true
    const navigate = useNavigate()
    const userId = localStorage.getItem('user_id')
    const email = localStorage.getItem('email')
    const {course} = useParams()
    const currentLetter = received && data[lesson - 1][currentLetterIndex]
    const [current, setCurrent] = useState([])
    const [indexless, setIndexless] = useState([])

    // useEffect(()=>{
    //   const filter = ()=>{
    //     const test = []
    //     if(received){
    //       data[lesson - 1].map((obj, index)=>{
    //         if(!obj.status){
    //           test.push(obj)
    //         }
    //       })
    //       setCurrent(test[currentLetterIndex])
    //       setIndexless(test)
    //       // if (!clicked) {
            
    //       // }
    //       calculateAnswered(userData.data)
    //     }
    //     // console.log(current)
    //     // generateOptions(current.letter, arr);
    //   }
    //   filter()
    // }, [received, currentLetterIndex])


      // const checkDone = () => {
      //   const lett = []
      //   if(received){
      //     for (var i=0 ; i < data[lesson - 1].length ; i++ ){
      //       const stat = data[lesson - 1][i].status
      //       if(!stat){
      //         lett.push(data[lesson - 1][i])
      //       }
      //     }
      //   setCurrentCourse(lett)
      // }
      // }

    function generateOptions(correctAnswer, allAnswers) {
        // Shuffle the array of answers
        const shuffledAnswers = allAnswers.slice().sort(() => Math.random() - 0.5);
        
        // Remove the correct answer from the shuffled array
        const options = shuffledAnswers.filter(answer => answer !== correctAnswer);
        
        // Select three random answers from the shuffled array
        const randomOptions = [];
        for (let i = 0; i < 3; i++) {
            randomOptions.push(options.splice(Math.floor(Math.random() * options.length), 1)[0]);
        }
        
        // Add the correct answer to the random options
        randomOptions.push(correctAnswer);
        
        // Shuffle the options again to make the order more random
        randomOptions.sort(() => Math.random() - 0.5);
        
        setLetters(randomOptions)
      }
    
    
      const checkResponse = (e, answer, index, answerIndex)=> {
        e.preventDefault()
            const newData = [...data]
        const value = e.target.textContent
        if(value === answer){
          // newData[lesson - 1].status = true
          newData[lesson - 1][currentLetterIndex].status = true
          // newData[lesson - 1].map((obj)=>{
          //   if(obj.letter === current.letter){
          //     obj.status = true
          //   }
            
          // })
          console.log("Correct!")
          setIsCorrect(true)
          setCorrect(index)
            setNext(true)
          setClicked(true)
          
        }else{
          newData[lesson - 1][currentLetterIndex].status = false
          console.log("Wrong!")
          setIsCorrect(false)
          setWrong(index)
          setCorrect(answerIndex)
            setNext(true)
          setClicked(true)
        }
        setJsonData(newData)
      }

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
          const response = await supabase
          .from('users')
          .update({ data: newData, letters: jsonData })
          .eq('email', email);
        }
    
      useEffect(()=>{
        // const response = await axios.put(`http://localhost:5000/user/putletters/${userId}`, 
        //       { letters: dataa}).then(res => console.log(res))
          const fnc = async () => {
            if (received && !clicked) {
              generateOptions(currentLetter.letter, arr);
            }
            if(next){
            //   if(currentLetterIndex === data[lesson - 1].length - 1){
            //   navigate('/roadmap')
            // }
            calculateAnswered(userData.data)
            setTimeout(async ()=>{
              await setCorrect(null)
              await setWrong(null)
              if(currentLetterIndex === data[lesson - 1].length - 1){
                navigate('/roadmap')
              }
              setCurrentLetterIndex(currentLetterIndex + 1);
              setNext(false)
              setClicked(false)
            }, 2000)
          }
        }
        // checkDone()
        fnc()
      }, [lesson, currentLetterIndex, next, data])

  return (
    <div className='game_template'>
        {received ? <><div className='img_comtainer'>
            <img src={`/${currentLetter.image_path}`} alt="" className='sign_img'/>
        </div>
        <section className='ul_choices'>
            {letters && letters.map((letter, index)=>(
                <p className={correct === index ? 'choise correct' : wrong === index ? 'choise wrong' : 'choise'} key={index}
                    onClick={(e)=>{!clicked ?checkResponse(e, currentLetter.letter, index, letters.indexOf(currentLetter.letter)) : null}}
                >{letter}</p>
            ))}
        </section></> : <RiseLoader color="#F28705"/>}
    </div>
  )
}

export default Letters
