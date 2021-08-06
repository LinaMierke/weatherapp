import { useEffect, useState } from "react";
import "./App.css";
import Header from "../src/components/header/Header";
import Weather from "../src/components/weather/Weather"
function App() {
  const [weatherData, setWeatherData] = useState([]);
  const fetchWeatherData = (searchValue = null) => {
    let URL = `api.openweathermap.org/data/2.5/weather?zip=${searchValue},us&appid=1cb4dbc4614fb4f8a145c1f3bf20f9d2`;
    fetch(URL)
      .then((res) => res.json())
      .then((jsonData) => setWeatherData(jsonData));
  };
  useEffect(() => {
    fetchWeatherData("22314");
  }, []);
  console.log("hi");
  return (
    <div className="App">
      <h1> Weather Moves</h1>
      <Header fetchWeatherData={fetchWeatherData} />
      <Weather title={"Current Weather"} weatherData={weatherData} />
    </div>
  );
}

export default App;
