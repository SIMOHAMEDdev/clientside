import React, { useState } from 'react'
import Data from "../Data.json"
import { HiPlay } from "react-icons/hi2";

const LevelState = ({ active, level }) => {

    const data = Data
  return (
    <div className={active ? 'levelstate active' : 'levelstate'}>
        <h1>Level {level}:</h1><br />
        <section>
            {Object.keys(data).map((key)=>{
                  console.log(parseInt(key), parseInt(level))
                if(parseInt(key) === parseInt(level)){
                  return Object.keys(data[key]).map((lesson, index)=>{
                  return (<div className='fadeInDown'>
                  <label key={index} className='lesson fadeInDown'>{lesson}: <HiPlay className='play_btn'/></label>
                    <p className='fadeInDown'
                    style={{fontSize: "20px", margin: "10px 0", display: "flex", alignItems: "center", justifyContent:"space-between"}}
                    >{data[key][lesson].title} <span>{data[key][lesson].progress}</span></p>
                    <div className="progress_bar fadeInDown"><div className="progress progress.animated" style={{width: data[key][lesson].width_progress}}></div></div>
                    </div> )
                })}else{
                  return null
                }
                // : null
              })}
        </section>
    </div>
  )
}

export default LevelState