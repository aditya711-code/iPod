import React from "react";
import sound from "../assets/maanmerijaan.mp3";
import "../styles/Screen.css";
//MyMusic Page to show the Music
class MyMusic extends React.Component {
  constructor() {
    super();
    this.state = {
      cur: 0,
    };
  }

  convertTimertoMinSec = () => {
    console.log(this.props.play);
    let audio = this.props.audio;
    let currentTimer = "";
    let currentMinute = 0;
    // let currentSecond = 0;
    if (audio.timer < 60) {
      if (audio.timer < 10) {
        currentTimer = "00:0" + audio.timer;
      } else {
        currentTimer = "00:" + audio.timer;
      }
    } else {
      currentMinute = parseInt(audio.timer / 60);
      if (audio.timer % 60 === 0) {
        currentTimer = "0" + currentMinute + ":00";
      } else {
        let second = audio.timer % 60;
        if (second < 10) {
          currentTimer = `0${currentMinute}:0${second}`;
        } else {
          currentTimer = `0${currentMinute}:${second}`;
        }
      }
    }
    this.setState({
      cur: currentTimer,
    });
  };

  updateTime = () => {
    this.setState({
      audio: this.props.audio,
    });
  };

  render() {
    let audio = this.props.audio;
    const seconds = audio.fullLength % 60;
    const minutes = parseInt(audio.fullLength / 60);
    let totalDuration = "";
    if (seconds < 10) {
      totalDuration = "0" + minutes + ":0" + seconds;
    } else {
      totalDuration = "0" + minutes + ":" + seconds;
    }
    return (
      <div className="music-info">
        <div className="title-bar">
          <p>iPod</p>
          <img src="https://cdn-icons-png.flaticon.com/512/7236/7236134.png"></img>
        </div>

        <div className="info">
          <img
            className="music-image"
            src="	https://i.scdn.co/image/ab67616d00001e0237f65266754703fd20d29854
"
          />
          <div classname="subInfo">
            <h4>Mann Meri Jaan</h4>
            <p>Champagne Talk</p>
            <p>KING</p>
          </div>
        </div>

        <div className="statusBar">
          <p className="curTime">
            {audio !== null ? Math.floor(audio.currentTime) : "0 / 0"}
          </p>
          <div className="seekBar">
            <div id="fill"></div>
          </div>
          <p className="dur">
            {audio != null ? Math.floor(audio.duration) : "0 / 0"}
          </p>
        </div>
        <div className="controls">
          <p>
            <i className="fas fa-fast-backward"></i>
          </p>

          <p>
            {this.props.play ? (
              <span>
                <i className="fas fa-play"></i>
              </span>
            ) : (
              <span>
                <i className="fas fa-pause"></i>
              </span>
            )}
          </p>
          <p>
            <i className="fas fa-fast-forward"></i>
          </p>
        </div>
      </div>
    );
  }
}

export default MyMusic;
