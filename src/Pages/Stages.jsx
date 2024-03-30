import React, {useEffect} from 'react'
import Roadmap from '../Components/Roadmap'
import Sidebar from '../Components/Sidebar'
import Data from '../Arabic.json'
import Words from '../data/moves_data.json'
import Letters from '../data/data.json'
import Numbers from '../data/numbers.json'
import axios from 'axios'

const Stages = () => {
  const userId = localStorage.getItem('user_id')
  useEffect( ()=>{
    const a = async() =>{try {
      const response = await axios.put(`http://localhost:5000/user/putwords/${userId}`, 
  //     // const response = await axios.put(`http://localhost:5000/user/putnumbers/${userId}`, 
  //     //        {data: Data })
  //           //  {numbers: Numbers })
              Words)
    } catch (error) {
      
    }}
    a()
  }, [])

  return (
    <div className='stages'>
        <Sidebar route={'/roadmap'}/>
        <Roadmap />
    </div>
  )
}

export default Stages