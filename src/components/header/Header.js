import React from "react";
import { useState } from "react";
import "./header.css";

export default function Header(props) {
    console.log("hi header",props)
  const [searchValue, setSearchValue] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  
  const handleClick = (e) => {
    e.preventDefault();
    props.fetchWeatherData(searchValue)
  };
  return (
    <div>
      <input type="text" placeholder="zip or city" onChange={handleInput} />
      <button className="button" style={{}} onClick={handleClick}>
        {" "}
        Search
      </button>
    </div>
  );
}
