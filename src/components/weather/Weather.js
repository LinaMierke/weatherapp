import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";

export default function Weather(props) {
  console.log("weather", props);
  const [currentWeather, setCurrentWeather] = useState([]);
  useEffect(() => {
    setCurrentWeather(props.weatherData);
  }, [props.weatherData]);
  const newWeather =  <WeatherCard {...currentWeather}  />;
  console.log("si",currentWeather)
  return (
    <div>
      <h1> Buenas Buenas</h1>
      {newWeather}
    </div>
  );
}
