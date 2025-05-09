import React, { useEffect, useState } from 'react';
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import axios from 'axios';
import test from '../test.json'
import '../styles/Inputs.css'; // Adjust the path based on your folder structure
import Chart from '../Chart';

const Inputs = ({ setQuery, setUnits, setResponse, trigger, setTrigger }) => {
  const [city, setCity] = useState("");
  const [chartcity, setChartCity] = useState("")
  const handleSearchClick = () => {
    if (city !== '') {
      setQuery({ q: city })
      setChartCity(city)
      setTrigger(!trigger)
    }
  }



  // ************** FOR MONGODB *********


  useEffect(() => {
    if (chartcity) {
      axios.put('https://skysageserver.onrender.com/updatecities', {
        username: localStorage.getItem("currentUser"),
        city: chartcity
      })
    }
  }, [chartcity])



  // ************** FOR MONGODB *********




  //  ******** FOR CHART *********

  const apiKey = '49f83439ae31ba4840afc2609a55c758';
  const units = 'metric';
  const getForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${chartcity}&appid=${apiKey}&units=${units}`


  useEffect(() => {

    if (chartcity) {
      axios.get(getForecast)
        .then((recieve) => {
          setResponse(recieve);
        })
        .catch((error) => {
          console.error(error);
        })
    }
  }, [chartcity])


  // ********* FOR CHART***********

  return (
    <div>
      <div className="inputs-container">
        <div className="inputs-wrapper">
          <input
            value={city}
            onChange={(e) => { setCity(e.currentTarget.value) }}
            type="text"
            placeholder="search city..."
            className="inputs-search"
          />
          <BiSearch size={30} className="icon"
            onClick={handleSearchClick}
          />
        </div>
        <div className="units-wrapper">
          <button className="unit-button"
            onClick={() => setUnits("metric")}>°C</button>
          <p className="separator">|</p>
          <button className="unit-button"
            onClick={() => setUnits("imperial")}>°F</button>
        </div>
      </div>
    </div>
  )
}

export default Inputs;
