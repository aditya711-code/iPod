import React from "react";
import "../styles/Screen.css";
//to get the settings page
class Settings extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="title-bar">
          <p>Settings</p>
          <img src="https://cdn-icons-png.flaticon.com/512/126/126472.png" />
        </div>
        <div className="content">
          <img
            src="https://cdn-icons-png.flaticon.com/512/126/126472.png"
            alt=""
          />
          <h2>Settings</h2>
        </div>
      </div>
    );
  }
}
export default Settings;
