import React, { useState, useEffect } from "react";

export default function Weather(props) {
  const [currentWeather, setCurrentWeather] = useState([]);

  useEffect(() => {
    setCurrentWeather(props.weatherData);
  }, [props.weatherData]);

  let weatherDescription = 0;
  let currentTemprature = 0;
  let minTemprature = 0;
  let maxTemprature = 0;
  let windSpeed = 0;
  let precipitation = 0;
  let humidity = 0;
  if (currentWeather.hasOwnProperty("main")) {
    weatherDescription = currentWeather.weather[0].description
    currentTemprature = currentWeather.main.temp;
    windSpeed= currentWeather.wind.speed
    minTemprature = currentWeather.main.temp_min
    maxTemprature = currentWeather.main.temp_max
    humidity = currentWeather.main.humidity
    
  }
 
  return (
    <div>
      <p> Weather Description: {weatherDescription}</p>
      <p> Current Temprature: {currentTemprature}</p>
      <p> Minimun Temperature: {minTemprature}</p>
      <p> Max temperature Description: {maxTemprature}</p>
      <p> Wind speed: {windSpeed}</p>
      <p> precipitation</p>
      <p> Humidity:{humidity} </p>
    </div>
  );
}
