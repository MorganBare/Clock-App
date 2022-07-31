import React from 'react';
import FullPage from './components/FullPage.js';
import TimeDateInfo from './components/TimeDateInfo.js';
import './scss/app.scss';



function App() {

  const [worldTime, setWorldTime] = React.useState(0);
  const [IpInfo, setIpInfo] = React.useState(0);
  const [displayMoreInfo, setDisplayMoreInfo] = React.useState(false);

  React.useEffect(() => {
    fetch("http://worldtimeapi.org/api/ip")
    .then(res => res.json())
    .then(data => setWorldTime(data))
  },[]);

  React.useEffect(() => {
    if(worldTime.client_ip){
      fetch(`http://api.ipapi.com/${worldTime.client_ip}?access_key=0a734a0ccb105e120c34bcc32d4c13f5`)
      .then(IpDataRes => IpDataRes.json())
      .then(IpData => setIpInfo(IpData))
    };
  },[worldTime.client_ip]);

  // This function toggles the lower portion of the page when the button in FullPage is clicked
  function handleDisplay(){
    setDisplayMoreInfo(!displayMoreInfo);
  };

  return (
      <div className="App">

        {/*FullPage will only render when worldTime is truthy or the API has returned data*/}
        {worldTime && <FullPage 
        worldTime={worldTime} 
        city={IpInfo.city} 
        country_code={IpInfo.country_code}
        handleDisplay={handleDisplay}
        displayMoreInfo={displayMoreInfo}
        />}

        {displayMoreInfo && <TimeDateInfo
        timezone={worldTime.timezone}
        day_of_year={worldTime.day_of_year}
        day_of_week={worldTime.day_of_week}
        week_number={worldTime.week_number}
         />}

      </div>
    );

  };


export default App;
