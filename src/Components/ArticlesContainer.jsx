import React, { useState } from 'react'
import Article from './Article'
import { Link } from 'react-router-dom'

const ArticlesContainer = () => {
  const [state, setState] = useState(1)

  return (
    <div className='articles_container'>
        <Article state={state}/>
        <div className='articles_side' dir='rtl'>
            <h1 style={{marginRight: "25px"}}>المقالات</h1>
            <ul className='ul_header' style={{display: "flex", flexDirection: "column",marginRight: "25px", color: "#fff"}}>
                <Link style={{textDecoration: "none", color: "#fff"}}><li onClick={()=>{setState(1)}}>أساسيات لغة الإشارة</li></Link>
                <Link style={{textDecoration: "none", color: "#fff"}}><li onClick={()=>{setState(2)}}>تحديات أشخاص الصم والبكم</li></Link>
                <Link style={{textDecoration: "none", color: "#fff"}}><li onClick={()=>{setState(3)}}>االتكنولوجيا و تقدم تعليم لغة الإشارة العربية</li></Link>
                <Link style={{textDecoration: "none", color: "#fff"}}><li onClick={()=>{setState(4)}}>لغة الإشارية العربية بين الماضي والحاضر والمستقبل</li></Link>
            </ul>
            <h1 style={{marginRight: "25px"}}>الدروس </h1>
        </div>
    </div>
  )
}

export default ArticlesContainer