import React from "react";
import { useState } from "react";
export default function Header(props) {
    console.log(props)
  const [searchedValue, setSearchedValue] = useState("");
  const handleInput = (e) => {
    e.preventDefault();
    setSearchedValue(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    props.fetchWeatherData(searchedValue);
  };
  return (
    <div>
      <input type="text" placeholder="Title" onChange={handleInput} />
      <button onClick={handleClick}> Search</button>
    </div>
  );
}
