import React from "react";
import "./days.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";

export default function Days(props) {
  // console.log("days", props.data.main.temp);
  return (
    <div className="card2">
      <div style={{ fontSize: "24px" }}> Next 7 days</div>
      <br />
      <div style={{ paddingBottom: "23px", paddingTop: "16px" }}>
        <FontAwesomeIcon icon={faCloudSun} /> 70.22˚
        <br />
      </div>
      <div style={{ paddingBottom: "23px" }}>
        <FontAwesomeIcon icon={faCloudSun} />
        {/* {props.data.main.temp} */} 72.22˚
        <br />
      </div>
      <div style={{ paddingBottom: "23px" }}>
        <FontAwesomeIcon icon={faCloudSun} /> 74.52˚
        <br />
      </div>
      <div style={{ paddingBottom: "23px" }}>
        <FontAwesomeIcon icon={faCloudSun} />
        76.20˚
        <br />
      </div>
      <div style={{ paddingBottom: "23px" }}>
        <FontAwesomeIcon icon={faCloudSun} />
        75.06˚
        <br />
      </div>
      <div style={{ paddingBottom: "23px" }}>
        <FontAwesomeIcon icon={faCloudSun} /> 78.33˚
        <br />
      </div>
      <div>
        <FontAwesomeIcon icon={faCloudSun} />
        80.02˚
        <br />
      </div>
    </div>
  );
}
