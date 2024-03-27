import React from 'react'
import icon from '../assets/icon.png'

const Home = () => {
  return (
    <div className='_container'>
        <div className="section1">
            {/* <div className="part1">
                <h1 style={{position: "relative", left: "19pc",fontSize:"70px", width: "fit-content",
                margin: '0'}}>DISCOVER</h1>
                <h1 style={{fontSize:"70px", position: "relative", left: "1pc", width: "fit-content",
                margin: '0'}}>WHERE</h1>
                <h1 style={{position: "relative", left: "18pc",fontSize:"70px", width: "fit-content",
                margin: '0'}}>FUN <span style={{fontSize: "23px", border: "2px solid", padding: "13px", borderRadius: "60px", position: 'relative',
                bottom: "16px", fontWeight: "100"}}>MEETS</span></h1>
                <h1 style={{position: "relative", left: "33.5pc",fontSize:"70px", width: "fit-content",
                margin: '0'}}>LEARNING</h1>
            </div> */}
            <div className="part1">
                <h1 style={{position: "relative", left: "30pc",fontSize:"60px", width: "fit-content",
                margin: '0 0 0 0'}}>إكتشف </h1>
                <h1 style={{fontSize:"60px", position: "relative", left: "28pc", width: "fit-content",
                margin: '-45px 0 0 0'}}>أين </h1>
                <h1 style={{position: "relative", left: "7pc",fontSize:"60px", width: "fit-content",
                margin: '-45px 0 0 0'}}>المتعة تلتقي </h1>
                <h1 style={{position: "relative", left: "0",fontSize:"60px", width: "fit-content",
                margin: '-35px 0 0 0'}}>بالتعلم</h1>
            </div>
            
            <div className="part2">
                <div style={{display: "flex", justifyContent: "center", gap: "17pc"}}>
                    <p style={{border: "2px solid", height: "fit-content",
                    padding: "10px 20px", borderRadius: "30px"}}>Welcome</p>
                    <img src={icon} alt="" />
                </div>
                {/* <p>Learn Sign Language while playing games and having fun</p> */}
                <p style={{position: "relative", left: "14.8pc", width: "14pc", textAlign: 'end'}}>استكشف عالم لغة الإشارة من خلال الألعاب
                والمستويات المصممة لتعزيز مهاراتك أثناء <br />. الاستمتاع بالرحلة</p>
            </div>
        </div>
        {/* <div className="section2">
            <div className='part3'>
                <div className='div1'>
                    <p className="number">3</p>
                    <p className="number_name">levels</p>
                </div>
                <div className='div2'>
                    <p className="number">+50</p>
                    <p className="number_name">Game</p>
                </div>
                <div className="div3"></div>
            </div>
            <div className='part4'></div>
        </div> */}
        <div className="section2">
            <div className='part3'>
                <div className='div1'>
                    <p className="number">3</p>
                    <p className="number_name">مستويات</p>
                </div>
                <div className='div2'>
                    <p className="number">+50</p>
                    <p className="number_name">Game</p>
                </div>
                <div className="div3"></div>
            </div>
            <div className='part4'></div>
        </div>
    </div>
  )
}

export default Home