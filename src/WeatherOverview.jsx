import React, { useEffect, useState } from 'react';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TempandDetails from './components/TempandDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import { getWeatherData } from './services/weatherservice';
import getFormattedWeatherData from './services/weatherservice';
import './styles/WeatherOverview.css';
import test from './test.json'
import Chart from './Chart';
import axios from 'axios';

const WeatherOverview = () => {

    const [query, setQuery] = useState({ q: 'madurai' })
    const [units, setUnits] = useState('metric')
    const [weather, setWeather] = useState(null)
    const [response, setResponse] = useState(test)
    const [cities, setCities] = useState([])
    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
        axios.get(`https://skysageserver.onrender.com/${localStorage.getItem("currentUser")}`)
            .then((response) => {
                console.log(response)
                setCities(response.data[0].cities)
            })
    }, [trigger, response])


    const getWeather = async () => {
        await getFormattedWeatherData({ ...query, units }).then((data) => {
            setWeather(data);
            console.log(data);
        });
    };
    useEffect(() => {
        getWeather();
    }, [query, units]); 

    return (
        <div className='weather-overview' >

            <div className='weather-overview-container'>
                <TopButtons
                    cities={cities}
                    setResponse={setResponse}
                    setQuery={setQuery}
                    trigger={trigger}
                    setTrigger={setTrigger} />
                <Inputs setResponse={setResponse}
                    setQuery={setQuery}
                    setUnits={setUnits}
                    trigger={trigger}
                    setTrigger={setTrigger} />
                {weather && (
                    <>
                        <TimeAndLocation weather={weather} />
                        <TempandDetails unit={units} weather={weather} />
                        <Forecast title='3 hour step forecast ' data={weather.hourly} />
                        <Forecast title='Daily forecast ' data={weather.daily} />
                    </>
                )}
            </div>
            <Chart response={response} />
        </div>
    );
}

export default WeatherOverview;
