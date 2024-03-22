import React from 'react'

const Roadmap = () => {
  return (
    <div className='main_page'>
        <div className="level first_level"></div>
        {/* <div className='container'>
            <div className='map_levels'>
                <div className='level left_levels'><div className='line left_line'/></div>
                <div className='level left_levels'><div className='line left_line'/></div>
            </div>
            <div className='map_line'></div>
            <div className='map_levels'>
                <div className='level right_levels'><div className='line right_line'/></div>
                <div className='level right_levels'><div className='line right_line'/></div>
            </div>
        </div> */}
        <div className="holder right_holder">
            <div className="arrow_right"></div>
            <div className="level second_level"></div>
        </div>
        <div className="holder left_holder">
            <div className="level third_level"></div>
            <div className="arrow_left"></div>
        </div>
        <div className="holder right_holder">
            <div className="arrow_right"></div>
            <div className="level second_level"></div>
        </div>
        <div className="holder left_holder">
            <div className="level third_level"></div>
            <div className="arrow_left"></div>
        </div>
    </div>
  )
}

export default Roadmap