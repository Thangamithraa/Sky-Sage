import React from 'react';
import '../styles/TimeAndLocation.css'; // Adjust the path based on your folder structure

const TimeAndLocation = ({
  weather: {formattedLocalTime, name, country},
}) => {
  return (
    <div>
      <div className="time-container">
        <p className="date-text">
          {formattedLocalTime}
        </p>
      </div>
      <div className="location-container">
        <p className="location-text">{`${name}, ${country}`}</p>
      </div>
    </div>
  )
}

export default TimeAndLocation;
