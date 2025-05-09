import { useEffect, useState } from 'react';
import response from './test.json'
import './styles/Forecast.css'
export default function Forecast(){

    const list = response.data.list;
    const [forecast,setForecast] = useState([])
    useEffect(()=>{
        const today = new Date().toISOString().split('T')[0];
        const filtered = list.filter(entry=> entry.dt_txt.startsWith(today))
        setForecast(filtered);
    },[])
    console.log(list);
    return(
        <>
        <div>
            <h1>Today's Forecast</h1>
            {
                forecast.map((data,key)=>(
                    <div className='hourly-forecast-container' key={key}>
                        <div> {data.dt_txt.split(" ")[1]} </div>
                        <div className='weather-params'>
                            <div>{data.main.feels_like}</div>
                            <div>{data.main.humidity}</div>
                            <div>{data.main.pressure}</div>
                            <div>{data.main.temp_max}</div>
                            <div>{data.main.temp_min}</div>
                            <div>{data.weather[0].description}</div>
                        </div>
                    </div>
                ))
            }
            </div>
        </>
    )
}