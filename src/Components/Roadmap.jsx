import React from 'react'

const Roadmap = () => {
  return (
    <>
        <div className="level first_level"></div>
        <div className='container'>
            <div className='map_levels'>
                <div className='level left_levels'><div className='line left_line'/></div>
                <div className='level left_levels'><div className='line left_line'/></div>
            </div>
            <div className='map_line'></div>
            <div className='map_levels'>
                <div className='level right_levels'><div className='line right_line'/></div>
                <div className='level right_levels'><div className='line right_line'/></div>
            </div>
        </div>
    </>
  )
}

export default Roadmap