import React, { useState, useEffect } from "react";
import Days from "./Days";
import "./weather.css";

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
  let location = 0;
  // let precipitation = 0;
  let humidity = 0;
  if (currentWeather.hasOwnProperty("main")) {
    location = currentWeather.name;
    weatherDescription = currentWeather.weather[0].description;
    currentTemprature = currentWeather.main.temp;
    windSpeed = currentWeather.wind.speed;
    minTemprature = currentWeather.main.temp_min;
    maxTemprature = currentWeather.main.temp_max;
    humidity = currentWeather.main.humidity;
  }

  return (
    <div className="content">
      <div className="weather">
        <div style={{ fontSize: "34px" }}> {location}</div>
<div style={{backgroundImage:`url("https://i.imgur.com/7iFFgxg.png")`, backgroundRepeat:'no-repeat', height:'150px', backgroundSize:'65% 85%'}}>
  
</div>
        <h1> {currentTemprature}</h1>
        <div> Weather Description: {weatherDescription}</div>
        <div> Minimun Temperature: {minTemprature}</div>
        <div> Max temperature Description: {maxTemprature}</div>
        <div> Wind speed: {windSpeed}</div>
        <div> precipitation</div>
        <div> Humidity:{humidity} </div>
      </div>
      <Days style={{ marginLeft: "300px" }} />
    </div>
  );
}
