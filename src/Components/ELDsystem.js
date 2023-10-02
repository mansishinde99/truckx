import React from 'react'
import '../Styles/ELDsystem.css'
import EastIcon from '@mui/icons-material/East';


const ELDsystem = () => {
  return (
    <div className='eld-systems'>
        <h1>Best and Affordable ELD System</h1>
        <div className='bluetooth'>
          <img src='https://truckx.com/wp-content/uploads/2020/10/TruckX-Bluetooth-ELD.png'/>
          <div className='bt-text'>
            <h2>Bluetooth ELD</h2>
            <ul>
                <li>HOS - DVIR 24/7 Support</li>
                <li>Live GPS</li>
                <li>IFTA Calculation</li>
                <li>Fleet Management App</li>
                <li>Plug & Go in a minute</li>
                <li>FMCSA Approved</li>
            </ul>
            <p>Free ELD Device</p>
          <button className='learnmore-button'>Learn More<EastIcon style={{width:"1vw", marginBottom:"-0.6vw", marginLeft:"0.3vw"}}/></button>
          </div>
        </div>

        <div className='wired'>
          <div className='w-text'>
          <h2>Wired ELD</h2>
            <ul>
                <li>HOS - DVIR 24/7 Support</li>
                <li>Live GPS | IFTA Calculation</li>
                <li>Ruggedized Tablet</li>
                <li>FDoking Station</li>
                <li>Data Plan Included</li>
                <li>Admin Mobile Plan</li>
                <li>FMCSA Approved</li>
            </ul>
            <div className='warranty'>
            <p>1 Year Warranty</p>
            <p>Internet Included</p>
            <p></p>
            </div>
          <button className='learnmore-button'>Learn More<EastIcon style={{width:"1vw", marginBottom:"-0.6vw", marginLeft:"0.3vw"}}/></button>
          </div>
          <img src='https://truckx.com/wp-content/uploads/2020/11/TruckX-Wired-ELD-Tablet.png'/>
        </div>

        <div className='advanced'>
          <h1>Most Advanced and Intuitive ELD System</h1>
          <p>24/7 Support helps make DOT compliance & Telematics easy</p>
          <img src='https://truckx.com/wp-content/uploads/2020/10/Bluetooth-ELD-Dispatcher-Screen.png'/>
        </div>
    </div>
  )
}

export default ELDsystem