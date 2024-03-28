import React from 'react'
import Roadmap from '../Components/Roadmap'
import Sidebar from '../Components/Sidebar'

const Stages = () => {
  return (
    <div className='stages'>
        <Sidebar route={'/roadmap'}/>
        <Roadmap />
    </div>
  )
}

export default Stages