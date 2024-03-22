import React, { useState } from 'react'
import Data from "../Data.json"

const LevelState = () => {
    const [width1, setWidth1] = useState("7pc")
    const [width2, setWidth2] = useState("14pc")
    const [width3, setWidth3] = useState("21pc")

    const data = Data.level1
  return (
    <div className='levelstate'>
        <h1>Level State:</h1>
        <section>
            
            {/* <label>Lesson 2:
              <p 
              style={{fontSize: "20px", margin: "3px 0", display: "flex", alignItems: "center", justifyContent:"space-between"}}
              >Learning Some Words <p>2/3</p></p>
              <div className="progress_bar"><div className="progress" style={{width: width2}}></div></div>
            </label>
            <label>Lesson 3:
              <p 
              style={{fontSize: "20px", margin: "3px 0", display: "flex", alignItems: "center", justifyContent:"space-between"}}
              >Test Your Knowledge <p>1/3</p></p>
              <div className="progress_bar"><div className="progress" style={{width: width1}}></div></div>
            </label> */}
            {/* <label>Lesson 4:</label> */}
            {Object.keys(data).map((lesson, index)=>{
                return (<label key={index}>{lesson}:
                  <p 
                  style={{fontSize: "20px", margin: "12px 0", display: "flex", alignItems: "center", justifyContent:"space-between"}}
                  >{data[lesson].title} <span>{data[lesson].progress}</span></p>
                  <div className="progress_bar"><div className="progress progress.animated" style={{width: data[lesson].width_progress}}></div></div>
                </label>)
            })}
        </section>
    </div>
  )
}

export default LevelState