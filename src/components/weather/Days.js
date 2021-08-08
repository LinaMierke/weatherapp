import React from "react";
import "./days.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSun
} from "@fortawesome/free-solid-svg-icons";

export default function Days(props) {
  let days = ["day1"]
  return (
    <div className="card2">
      <div style={{ fontSize: "24px" }}> Next 7 days</div>
      <br />
      <div style={{paddingBottom: '23px', paddingTop:"16px"}}>
          <FontAwesomeIcon icon={faCloudSun} />
          <br />
        </div>
        <div style={{paddingBottom: '23px'}}>
          <FontAwesomeIcon icon={faCloudSun} />
          <br />
        </div>
        <div style={{paddingBottom: '23px'}}>
          <FontAwesomeIcon icon={faCloudSun} />
          <br />
        </div>
        <div style={{paddingBottom: '23px'}}>
          <FontAwesomeIcon icon={faCloudSun} />
          <br />
        </div>
        <div style={{paddingBottom: '23px'}}>
          <FontAwesomeIcon icon={faCloudSun} />
          <br />
        </div>
        <div style={{paddingBottom: '23px'}}>
          <FontAwesomeIcon icon={faCloudSun} />
          <br />
        </div>
        <div>
          <FontAwesomeIcon icon={faCloudSun} />
          <br />
        </div>
    </div>
  );
}
