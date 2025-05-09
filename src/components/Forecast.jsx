import React from 'react';
import '../styles/Forecast.css'; // Make sure to create this file

const Forecast = ({title, data}) => {

  return (     
    <div className="forecast-container">
      <div className="forecast-header">
        <p className="forecast-title">{title}</p>
      </div>
      <hr className="forecast-divider"/>
      <div className="forecast-items">
        {data.map((d, index) => (
          <div key={index} className="forecast-item">
            <p className="forecast-day">{d.title}</p>
            <img 
              src={d.icon}
              alt="weather icon" 
              className="forecast-icon"
              style={{animationDelay:`${Math.random() * 10}s`}}
            />
            <p className="forecast-temp">{`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
