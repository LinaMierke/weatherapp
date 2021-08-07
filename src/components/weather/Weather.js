import React from "react";
import WeatherCard from "./WeatherCard"

export default function Weather(props) {
 console.log("card", props.weatherData)
  return (
  
    <div>
          <WeatherCard weather={props.weatherData}/>
      
      
    </div>
  );
}
