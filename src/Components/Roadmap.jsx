import { Children, useState } from 'react';
import LevelState from '../Components/LevelState'

const Roadmap = () => {
    const [levels, setLevels] = useState([2, 3])
    const [active, setActive] = useState(false)
    const [state, setState] = useState('')
    const [level, setLevel] = useState(0)

  return (
    <div className='main_page'>
        <div className='roadmap'>
            <div className={state === "first"? "level first_level current" : "level first_level"} onClick={(e)=>{
            setActive(true);
            setState("first");
            setLevel(e.currentTarget.innerText)}}>
                <p>1</p>
            </div>
                    <div className="holder right_holder" >
                        <div className="arrow_right"></div>
                        <div className={state === "second"? "level second_level current" : "level second_level"} onClick={(e)=>{
                            setActive(true);
                        setState("second");
                        setLevel(e.currentTarget.innerText)}}>
                            <p>2</p>
                        </div>
                    </div> 
                    <div className="holder left_holder"> 
                        <div className={state === "third" ? "level third_level current" : "level third_level"} onClick={(e)=>{
                            setState("third");
                            setActive(true);
                        setLevel(e.currentTarget.innerText)}}>
                        <p>3</p>
                        </div>
                        <div className="arrow_left"></div>
                    </div>
        </div>
        <LevelState active={active} level={level}/>
    </div>
  )
}

export default Roadmap