import React, {useState} from 'react'
import { IoMap, IoLogOut  } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import { SiOpenvpn } from "react-icons/si";
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom';

const Sidebar = ({route}) => {
    const map = route === "/roadmap"
    const learn = route === "/learn"
    const game = route === "/game"
    const navigate = useNavigate()

  return (
    <div className='sidebar'>
        <img src={logo} alt="" className='side_logo'/>
        <div style={{textAlign: "center", display: "grid", gap: "30px"}}>
            <IoMap className={map? 'sidebar-icon currentPage' : 'sidebar-icon'} onClick={()=>{navigate("/roadmap")}}/>
            <FaBookReader className={learn? 'sidebar-icon currentPage' : 'sidebar-icon'} onClick={()=>{navigate("/articles")}}/>
            <SiOpenvpn className={game? 'sidebar-icon currentPage' : 'sidebar-icon'}/>
        </div>
        <IoLogOut className='sidebar-icon' style={{position: "relative", bottom: "15px"}}/>
    </div>
  )
}

export default Sidebar