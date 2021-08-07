import React from "react";

export default function WeatherCard(props) {
  

  // let humidity = 0;
  // const humidity = typeof props.main.humidity != undefined ? 10 : props.main.humidity;
//    if (typeof (props) !== 'undefined') {
//      humidity = props.main.humidity
// } else {
//     console.log('Undefined or Null')
// }
  return (
    <div>
      <p> Weather Description: </p>
      <p> Current Temprature </p>
      <p> Minimun Temperature </p>
      <p> Max temperature Description</p>
      <p> Wind speed:</p>
      <p> precipitation</p>
      <p> Humidity</p>
    </div>
  );
}
