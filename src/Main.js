import React from 'react';
import Navbar from './Components/Navbar';
import Platform from './Components/Platform';
import Fleet from './Components/Fleet';
import Tracker from './Components/Tracker';
import ELDsystem from './Components/ELDsystem';
import Owners from './Components/Owners';
import Companies from './Components/Companies';
import Recognized from './Components/Recognized';
import Trust from './Components/Trust';

const Main = () => {

  const slides = [
    {
        text: 
        "Saved huge amount of Time and Money for my business. I know exactly what drivers are going, active, and what our mileage is. I recommend TruckX  to all my friends.Its the best ELD solution.",
        img: "https://truckx.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-12-at-5.54.29-PM.png",
        name: "WALTER ZEPEDA",
        bs: "Southern Counties Express"
    },
    {
        text: 
        "TruckX is easy to operate and affordable. I’ve saved hundreds of dollars compared to all of my friends with their ELD systems.Starting at only $20 a month, per truck. Great customer support, easy to install hardware, and intuitive driver &amp; fleet apps.",
        img: "https://truckx.com/wp-content/uploads/2020/10/MicrosoftTeams-image-1.png",
        name: "JOSE",
        bs: "Prestige Freight Llc"
    },
    {
        text:  "We tried 2 different ELD companies before using TruckX. It took 5 mins to install and we got all of our 15 trucks on the road same day. Very easy to use and great 24/7 customer support.",
        img: "https://truckx.com/wp-content/uploads/2020/10/MicrosoftTeams-image-2.jpg",
        name: "BABU KAHLON",
        bs: "Best Bay Trucking"
    },
    {
        text: "TruckX is built with drivers in mind, It was the best choice being an Owner Operator. I also referred a lot of my friends to use TruckX. With their Dispatch system coming I can manage my authority on the go and great 24/7 support!",
        img: "https://truckx.com/wp-content/uploads/2020/10/MicrosoftTeams-image-3.png",
        name: "HONG LIU",
        bs: "Hongs Trucking"
    }
] 

const images = [
  "https://truckx.com/wp-content/uploads/2019/08/we-caovered-by-copy-2.png",
    "https://truckx.com/wp-content/uploads/2019/08/we-caovered-by-copy-4.png",
    "https://truckx.com/wp-content/uploads/2019/08/we-caovered-by-copy-3.png",
    "https://truckx.com/wp-content/uploads/2019/08/we-covered-by-copy-4.png",
];

const companies = [
  "https://truckx.com/wp-content/uploads/2019/08/TruckX-Customer-Silicon-Roadway.png",
  "https://truckx.com/wp-content/uploads/2019/08/TruckX-Customer-Eagle.png",
  "https://truckx.com/wp-content/uploads/2019/08/TruckX-Customer-BRAR.png",
  "https://truckx.com/wp-content/uploads/2019/08/TruckX-Customer-BESTBUY.png",
  "https://truckx.com/wp-content/uploads/2019/08/TruckX-Customer-NE.png",
];


  return (
   <div>
      <Navbar/>
      <Platform/>
      <Fleet/>
      <Tracker/>
      <ELDsystem/>  
      <Owners slides={slides}/>
      <Companies companies={companies}/>
      <Recognized images={images}/>
      <Trust/>
    </div>
  )
}

export default Main