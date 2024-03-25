import { Children, useState } from 'react';
import LevelState from '../Components/LevelState'

const Roadmap = () => {
    const [levels, setLevels] = useState([2, 3])
    const [active, setActive] = useState(false)
    const [level, setLevel] = useState(0)

  return (
    <div className='main_page'>
        <div className='roadmap'>
            <div className="level first_level" onClick={(e)=>{setActive(true)
            setLevel(e.currentTarget.innerText)}}>
                <p>١</p>
            </div>
            {/* {levels.map((num, index) => 
                num % 2 === 0 ?
                    <div className="holder right_holder" key={index}>
                        <div className="arrow_right"></div>
                        <div className="level second_level" onClick={(e)=>{setActive(true)
                        setLevel(e.currentTarget.innerText)}}>
                            <p>{num}</p>
                        </div>
                    </div> 
                    :
                    <div className="holder left_holder" key={index}> 
                        <div className="level third_level" onClick={(e)=>{setActive(true)
                        setLevel(e.currentTarget.innerText)}}>
                        <p>{num}</p>
                        </div>
                        <div className="arrow_left"></div>
                    </div>
            )} */}
                    <div className="holder right_holder" >
                        <div className="arrow_right"></div>
                        <div className="level second_level" onClick={(e)=>{setActive(true)
                        setLevel(e.currentTarget.innerText)}}>
                            <p>٢</p>
                        </div>
                    </div> 
                    <div className="holder left_holder"> 
                        <div className="level third_level" onClick={(e)=>{setActive(true)
                        setLevel(e.currentTarget.innerText)}}>
                        <p>٣</p>
                        </div>
                        <div className="arrow_left"></div>
                    </div>
        </div>
        <LevelState active={active} level={level}/>
    </div>
  )
}

export default Roadmap