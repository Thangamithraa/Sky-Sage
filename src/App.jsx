import React, { useEffect } from 'react'
import TopBar from './TopBar'
import './App.css'

// import WeatherOverview from './WeatherOverview'
// import Chart from './Chart'
// import News from './News'
import IntroPage from './Intro'
const App = () => {
  return (
    <div>
      {console.log(localStorage.getItem("currentUser"))}
      { (localStorage.getItem("currentUser")!=="null" && localStorage.getItem("currentUser")!==null) ? <TopBar/> : <IntroPage/>}
    </div>

  );
};
export default App