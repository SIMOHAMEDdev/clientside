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
          setTimeout(async ()=>{
            await setCorrect(null)
            await setWrong(null)
            setCurrentLetterIndex(currentLetterIndex + 1);
            setNext(false)
          }, 2000)
        }
      }, [lesson, currentLetterIndex, next])
    
      const checkResponse = (e, answer, index, answerIndex)=> {
        const value = e.target.textContent
        if(value === answer){
          console.log("Correct!")
          setIsCorrect(true)
          setCorrect(index)
          setNext(true)
        }else{
          console.log("Wrong!")
          setIsCorrect(false)
          setWrong(index)
          setCorrect(answerIndex)
          setNext(true)
        }
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
                <div>
                    <IoClose className='choose_btn'/>
                    <IoCheckmark className='choose_btn'/>
                </div>
            </section>
    </div>
  )
}

export default Numbers