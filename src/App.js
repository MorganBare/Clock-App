import React from 'react';
import FullPage from './components/FullPage.js';
import TimeDateInfo from './components/TimeDateInfo.js';
import './scss/app.scss';



function App() {

  const [worldTime, setWorldTime] = React.useState(0)

  React.useEffect(() => {
    fetch("http://worldtimeapi.org/api/ip")
    .then(res => res.json())
    .then(data => setWorldTime(data))
  }, [])

  console.log(worldTime)

  return (
      <div className="App">
        {/*FullPage will only render when worldTime is truthy or the API has returned data*/}
        {worldTime && <FullPage worldTime={worldTime}/>}
        <TimeDateInfo />
      </div>
    );

  };


export default App;
