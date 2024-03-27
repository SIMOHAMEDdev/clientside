import React, {useState} from 'react'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({route}) => {
    const home = route === "/"
    const about = route === "/about"
    const goals = route === "/goals"
    const faqs = route === "/faqs"
    const navigate = useNavigate()
    
  return (
    <div className='header'>
        <div className='side1'>
            <img src={logo} alt="" className='logo' onClick={()=>{navigate('/')}}/>
            <ul className='ul_header'>
                <Link style={{textDecoration: "none", color: "rgb(21, 21, 21)"}} to={"/"}><li className={home ? 'li activated' : 'li'}>الرئيسية</li></Link>
                <Link style={{textDecoration: "none", color: "rgb(21, 21, 21)"}} to={"/about"}><li className={about ? 'li activated' : 'li'}>نبذة عنا</li></Link>
                <Link style={{textDecoration: "none", color: "rgb(21, 21, 21)"}} to={"/goals"}><li className={goals ? 'li activated' : 'li'}>الأهداف</li></Link>
                <Link style={{textDecoration: "none", color: "rgb(21, 21, 21)"}} to={"/faqs"}><li className={faqs ? 'li activated' : 'li'}>FAQs</li></Link>
            </ul>
        </div>
        <button className='play_now' onClick={()=>{navigate('/roadmap')}}>Play Now</button>
    </div>
  )
}

export default Header