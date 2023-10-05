import React from 'react'
import "../Styles/Trust.css"
import CountUp from 'react-countup'
import EastIcon from '@mui/icons-material/East';

const Trust = () => {
  return (
    <div className='trust'>
        <h2 className='text'>TRUCKX TRUSTED BY OVER</h2>
        <h1>
            <CountUp start={0} end={90000} duration={2} delay={0}/>+
        </h1>
        <h2 className='text2'>DRIVERS</h2>
        <button className='learnmore-button'>Order Online<EastIcon style={{width:"1vw", marginBottom:"-0.6vw", marginLeft:"0.3vw"}}/></button>
        </div>
  )
}

export default Trust