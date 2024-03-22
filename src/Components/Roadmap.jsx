import { useState } from 'react';
import LevelState from '../Components/LevelState'

const Roadmap = () => {
    const [levels, setLevels] = useState([2, 3, 4, 5])
  return (
    <div className='main_page'>
        <div className='roadmap'>
            <div className="level first_level">
                <p>1</p>
            </div>
            {levels.map((num, index) => 
                num % 2 === 0 ?
                    <div className="holder right_holder" key={index}>
                        <div className="arrow_right"></div>
                        <div className="level second_level">
                            <p>{num}</p>
                        </div>
                    </div> 
                    :
                    <div className="holder left_holder" key={index}> 
                        <div className="level third_level">
                        <p>{num}</p>
                        </div>
                        <div className="arrow_left"></div>
                    </div>
            )}
        </div>
        <LevelState />
    </div>
  )
}

export default Roadmap