import React from "react";

export default function WeatherCard(props) {
  console.log("card props", props);
  return (
    <div>
      <h1> Heeeeelloo Weather Card</h1>
      <p> Weather Description </p>
      <p> Current Temprature </p>
      <p> Minimun Temperature hiiiii</p>
      <p> Max temperature Description</p>
      <p> Wind speed: </p>
      <p> precipitation</p>
      <p> Humidity</p>
    </div>
  );
}
