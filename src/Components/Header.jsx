import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div>
        <img src={logo} alt="" style={{height: "3pc"}}/>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Goals</li>
            <li>Quotes</li>
        </ul>
    </div>
  )
}

export default Header