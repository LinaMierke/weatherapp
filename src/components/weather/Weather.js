import React, { useState, useEffect } from "react";
import Days from "./Days";
import "./weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faTemperatureLow,
  faTemperatureHigh,
  faRainbow,
  faTint,
  // faWater,
} from "@fortawesome/free-solid-svg-icons";

export default function Weather(props) {
  console.log("weatherjs", props.weatherData);
  return (
    <div className="content">
      <div className="card">
        <div className="city" style={{ fontSize: "24px" }}>
          {props.weatherData.city.name}
        </div>
        <br />
        <div style={{ fontSize: "64px", fontWeight: "600" }}>
          {props.weatherData.list[0].main.temp}˚
        </div>
        <br />
        <div>
          <FontAwesomeIcon icon={faRainbow} />
          {props.weatherData.list[0].weather[0].description}
          <br />
        </div>
        <div style={{ fontTransform: "uppercase" }}>
          <FontAwesomeIcon icon={faWind} />
          {props.weatherData.list[0].wind.speed}
          <br />
        </div>
        <div>
          <FontAwesomeIcon icon={faTemperatureLow} />
          {props.weatherData.list[0].main.temp_min}˚
          <br />
        </div>
        <div>
          <FontAwesomeIcon icon={faTemperatureHigh} />
          {props.weatherData.list[0].main.temp_max}˚
          <br />
        </div>
        {/* <div> Need to figure precipitation
          <FontAwesomeIcon icon={faWater} />
          <br />
        </div> */}
        <div>
          <FontAwesomeIcon icon={faTint} />{" "}
          {props.weatherData.list[0].main.humidity}˚<br />
        </div>
      </div>
      <Days style={{ marginLeft: "300px" }} />
    </div>
  );
}
