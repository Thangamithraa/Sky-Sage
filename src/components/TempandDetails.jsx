import React from 'react';
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import '../styles/TempandDetails.css'; // Adjust the path based on your folder structure

const TempandDetails = ({
    weather:{
    details,
    icon, 
    temp, 
    temp_min, 
    temp_max, 
    sunrise, 
    sunset, 
    speed, 
    humidity, 
    feels_like
},unit}) => {
    const VerDetails = [
        {
            id: 1,
            Icon: FaThermometerEmpty,
            title: "Real feel",
            value: `${feels_like.toFixed()}°`+(unit==='metric' ? ("C") : ("F")),
        },
        {
            id: 2,
            Icon: BiSolidDropletHalf,
            title: "Humidity",
            value: `${humidity.toFixed()}%`,
        },
        {
            id: 3,
            Icon: FiWind,
            title: "Wind",
            value: `${speed.toFixed()} `+(unit==='metric' ? ("Km/h") : ("m/s")),
        },
    ];
    const HoriDetails = [
        {
            id: 1,
            Icon: GiSunrise,
            title: "SunRise",
            value: sunrise,
        },
        {
            id: 2,
            Icon: GiSunset,
            title: "Sunset",
            value: sunset,
        },
        {
            id: 3,
            Icon: MdKeyboardArrowUp,
            title: "High",
            value: `${temp_max.toFixed()}°`+(unit==='metric' ? ("C") : ("F")),
        },
        {
            id: 4,
            Icon: MdKeyboardArrowDown,
            title: "Low",
            value: `${temp_min.toFixed()}°`+(unit==='metric' ? ("C") : ("F")),
        },
    ];
    return (
        <div className='TempandDetails'>
            <div className="header">
                <p>{details}</p>
            </div>
            <div className="weather-info">
                <img 
                    src={icon}
                    alt="weather icon"
                    className="weather-icon"
                />
                <p className="temperature">{`${temp.toFixed()}°`}{unit==='metric' ? ( <span>C</span> ) : (<span>F</span>)}</p>
                <div className="vertical-details">
                    {VerDetails.map(({ id, Icon, title, value }) => (
                        <div key={id} className="detail-item">
                            <Icon size={18} className="icon"/>
                            {`${title}: `} <span className="value">{value} </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="horizontal-details">
                {HoriDetails.map(({ id, Icon, title, value }) => (
                    <div key={id} className="horizontal-detail-item">
                        <Icon size={40} className="icon"/>
                        <p className="detail-text">
                            {`${title}: `} <span className="value">{value} </span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TempandDetails;
