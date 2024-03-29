import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ArticlesSide = ({route}) => {
    const article1 = route === "/a1"
    const article2 = route === "/a2"
    const article3 = route === "/a3"
    // const faqs = route === "/faqs"
    const navigate = useNavigate()
    
  return (
    <div className='articles_side' dir='rtl'>
            <h1 style={{marginRight: "25px"}}>المقالات</h1>
            <ul className='ul_header' style={{display: "flex", flexDirection: "column",marginRight: "25px"}}>
                <Link style={{textDecoration: "none", color: "rgb(21, 21, 21)"}}><li>أساسيات لغة الإشارة</li></Link>
                <Link style={{textDecoration: "none", color: "rgb(21, 21, 21)"}}><li>تحديات أشخاص الصم والبكم</li></Link>
                <Link style={{textDecoration: "none", color: "rgb(21, 21, 21)"}}><li>االتكنولوجيا و تقدم تعليم لغة الإشارة العربية</li></Link>
                <Link style={{textDecoration: "none", color: "rgb(21, 21, 21)"}}><li>لغة الإشارية العربية بين الماضي والحاضر والمستقبل</li></Link>
            </ul>
    </div>
  )
}

export default ArticlesSide