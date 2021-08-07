import React, { useState} from "react";
import WeatherCard from "./WeatherCard";

export default function Weather(props) {

  const [currentWeather, setCurrentWeather] = useState([]);

  useState(() => {
    setCurrentWeather(props.weatherData);
  }, [props.weatherData]);

  const newWeather =  <WeatherCard {...currentWeather}  />;
  console.log("new props",props)
  return (
    <div>
      <h1> hi</h1>
      {newWeather}
    </div>
  );
}
