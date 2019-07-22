import "./SeasonDisplay.css"
import React, { Component } from "react";

const seasonConfig = {
    summer:{
        text:"Let's hit the beach",
        icon:"sun"
    },
    winter:{
        text:"Burr! It is Chilly",
        icon:"snowflake"
    }
}

class SeasonDisplay extends Component {
  render() {
    const season = getSeason(this.props.lat, new Date().getMonth());
    const {text, icon} = seasonConfig[season];
    return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${icon} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${icon} icon`} />
      </div>
    );
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) return lat > 0 ? "summer" : "winter";
  else return lat > 0 ? "winter" : "summer";
};

export default SeasonDisplay;
