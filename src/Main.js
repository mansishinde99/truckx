import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Platform from './Components/Platform';
import Fleet from './Components/Fleet';
import Tracker from './Components/Tracker';
import ELDsystem from './Components/ELDsystem';
import Owners from './Components/Owners';


const Main = () => {

  return (
    <div>
      <Navbar/>
      <Platform/>
      <Fleet/>
      <Tracker/>
      <ELDsystem/>
      <Owners/>
    </div>
  )
}

export default Main