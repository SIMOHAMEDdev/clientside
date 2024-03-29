import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ArticlesSide = ({route}) => {
    const article1 = route === "/a1"
    const article2 = route === "/a2"
    const article3 = route === "/a3"
    // const faqs = route === "/faqs"
    const navigate = useNavigate()
    
  return (
    <div className='header' >
            <ul className='ul_header' style={{display: "flex", flexDirection: "column"}}>
                <Link style={{textDecoration: "none", color: "rgb(21, 21, 21)"}} to={"/a1"}><li>Article 1</li></Link>
                <Link style={{textDecoration: "none", color: "rgb(21, 21, 21)"}} to={"/a2"}><li>Article 2</li></Link>
                <Link style={{textDecoration: "none", color: "rgb(21, 21, 21)"}} to={"/a3"}><li>Article 3</li></Link>
            </ul>
    </div>
  )
}

export default ArticlesSide