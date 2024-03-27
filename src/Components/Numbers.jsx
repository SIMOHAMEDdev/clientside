import React, {useState, useEffect} from 'react'
import numbers from '../data/numbers.json'
import { IoClose, IoCheckmark } from "react-icons/io5";


const Numbers = ({lesson}) => {
    const [letters, setLetters] = useState([])
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const currentLetter= numbers[lesson - 1][currentLetterIndex];
    const [wrong, setWrong] = useState(null)
    const [correct, setCorrect] = useState(null)
    const [next, setNext] = useState(false)
    const [clicked, setClicked] = useState(null)
  

    // function generateOptions(correctAnswer, allAnswers) {
    //     // Shuffle the array of answers
    //     const shuffledAnswers = allAnswers.slice().sort(() => Math.random() - 0.5);
        
    //     // Remove the correct answer from the shuffled array
    //     const options = shuffledAnswers.filter(answer => answer !== correctAnswer);
        
    //     // Select three random answers from the shuffled array
    //     const randomOptions = [];
    //     for (let i = 0; i < 3; i++) {
    //         randomOptions.push(options.splice(Math.floor(Math.random() * options.length), 1)[0]);
    //     }
        
    //     // Add the correct answer to the random options
    //     randomOptions.push(correctAnswer);
        
    //     // Shuffle the options again to make the order more random
    //     randomOptions.sort(() => Math.random() - 0.5);
        
    //     setLetters(randomOptions)
    //   }
    
      useEffect(() => {
        // if (currentLetter && !currentLetter.status) {
        //   generateOptions(currentLetter.letter, arr);
        // } 
        if(currentLetterIndex === 10){
          navigate('/roadmap')
        }
      }, [lesson, currentLetterIndex]);
    
      useEffect(()=>{
        // console.log(lesson)
        if(next){
        //   setTimeout(async ()=>{
            setCorrect(null)
            setWrong(null)
            setCurrentLetterIndex(currentLetterIndex + 1);
            setNext(false)
        //   }, 1500)
        }
      }, [lesson, currentLetterIndex, next])
    
      const checkResponse = (clicked, answer)=> {
        if(clicked === answer){
          console.log("Correct!")
          alert("Thats right the answer is: " + currentLetter.number)
          setNext(true)
        }else if(clicked !== answer){
          console.log("Wrong!")
          alert("the answer is: " + currentLetter.number)
          setNext(true)
        }
        // if(value === answer){
        //   setIsCorrect(true)
        //   setCorrect(index)
        //   setNext(true)
        // }else{
        //   setIsCorrect(false)
        //   setWrong(index)
        //   setCorrect(answerIndex)
        //   setNext(true)
        // }
      }
  return (
    <div className='game_template'>
            <div className='img_comtainer'>
              <img src={`${currentLetter.image_path}`} alt="" className='sign_img'/>
            </div>
            <section className='ul_choices1'>
              {/* {letters && letters.map((letter, index)=>(
                  <p className={correct === index ? 'choise correct' : wrong === index ? 'choise wrong' : 'choise'} key={index}
                  onClick={(e)=>{checkResponse(e, currentLetter.letter, index, letters.indexOf(currentLetter.letter))}}
                  >{letter}</p>
              ))} */}
                <h6  style={{margin: "0"}}>{currentLetter.choise}</h6>
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

export default Numbers