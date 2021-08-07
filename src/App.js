import { useEffect, useState } from "react";
import "./App.css";
import Header from "../src/components/header/Header";
import Weather from "../src/components/weather/Weather";
import "./App.css";



export default function App() {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [weatherData, setWeatherData] = useState([]);
  const fetchWeatherData = (searchValue = null) => {
    //if is a zip run zip or q for value
    const usezipparam =
      searchValue.length === 5 ? `zip=${searchValue}` : `q=${searchValue}`;
    let URL = `https://api.openweathermap.org/data/2.5/weather?units=imperial&${usezipparam}&cnt=7,us&appid=${API_KEY}`;
    fetch(URL)
      .then((response) => response.json())
      .then((jsonData) => setWeatherData(jsonData));
    // .then(async (response) => {
    //   try {
    //     const data = await response.json();
    //     console.log("response data?", data);
    //   } catch (error) {
    //     console.log("Error happened here!");
    //     console.error(error);
    //   }
    // });
  };
  useEffect(() => {
    fetchWeatherData("22314");
  }, []);
  return (
    <div className="main">
      <div className="title" style={{ fontSize: "4em" }}>
        <p> weather moves </p>
      </div>
      <div className="shape"></div>

      <Header fetchWeatherData={fetchWeatherData} />
      <Weather title={"Current Weather"} weatherData={weatherData} />
    </div>
  );
}
