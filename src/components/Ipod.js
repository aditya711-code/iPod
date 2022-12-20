import React from "react";
import ZingTouch from "zingtouch";
import "../styles/Buttons.css";
import Screen from "./Screen";
import sound from "../assets/maanmerijaan.mp3";
class Ipod extends React.Component {
  //states
  // activeItem:to showcase which is selected
  //activePage:to showcase which page is on the screen
  //enter:entry point
  //play:to toggle the music by pressing play and pause on the wheel
  constructor() {
    super();
    this.state = {
      activeItem: "NowPlaying",
      activePage: "Home",
      enter: 0,
      play: false,
    };
  }
  //using zingTouch to implement the rotate functionality
  rotateWheel = () => {
    var containerElement = document.getElementById("outer-button-container");
    var activeRegion = new ZingTouch.Region(containerElement);
    var change = 0;
    var self = this;
    self.state.enter = self.state.enter + 1;
    if (self.state.enter < 2) {
      activeRegion.bind(containerElement, "rotate", function (event) {
        var newAngle = event.detail.distanceFromLast;
        console.log(newAngle);
        if (newAngle < 0) {
          console.log(change);
          change++;
          if (change == 15) {
            change = 0;
            if (self.state.activePage === "Home") {
              if (self.state.activeItem === "NowPlaying") {
                self.setState({
                  activeItem: "Music",
                });
              } else if (self.state.activeItem === "Music") {
                self.setState({
                  activeItem: "Games",
                });
              } else if (self.state.activeItem === "Games") {
                self.setState({
                  activeItem: "Settings",
                });
              } else if (self.state.activeItem === "Settings") {
                self.setState({
                  activeItem: "NowPlaying",
                });
              }
            } else if (self.state.activePage == "Music") {
              if (self.state.activeItem === "MyMusic") {
                self.setState({
                  activeItem: "Artists",
                });
              } else if (self.state.activeItem === "Artists") {
                self.setState({
                  activeItem: "Album",
                });
              } else if (self.state.activeItem === "Album") {
                self.setState({
                  activeItem: "MyMusic",
                });
              }
            }
          }
        } else {
          console.log(change);
          change++;
          if (change === 15) {
            console.log("change state");
            change = 0;
            if (self.state.activePage === "Home") {
              if (self.state.activeItem === "NowPlaying") {
                self.setState({
                  activeItem: "Settings",
                });
              } else if (self.state.activeItem === "Music") {
                self.setState({
                  activeItem: "NowPlaying",
                });
              } else if (self.state.activeItem === "Games") {
                self.setState({
                  activeItem: "Music",
                });
              } else if (self.state.activeItem === "Settings") {
                self.setState({
                  activeItem: "Games",
                });
              }
            } else if (self.state.activePage === "Music") {
              if (self.state.activeItem === "MyMusic") {
                self.setState({
                  activeItem: "Artists",
                });
              } else if (self.state.activeItem === "Artists") {
                self.setState({
                  activeItem: "Album",
                });
              } else if (self.state.activeItem === "Album") {
                self.setState({
                  activeItem: "MyMusic",
                });
              }
            }
          }
        }
      });
    } else {
      console.log("Not allowed to enter");
    }
  };
  //to go to selected activeItem and go inside the activePage
  changePage = () => {
    if (this.state.activeItem === "Music") {
      this.setState({
        activeItem: "MyMusic",
        activePage: this.state.activeItem,
      });
    } else if (this.state.activeItem === "NowPlaying") {
      this.setState({
        activeItem: "NowPlaying",
        activePage: "MyMusic",
      });
    } else {
      this.setState({
        activeItem: this.state.activeItem,
        activePage: this.state.activeItem,
      });
    }
  };
  //change the homeScreen return back from the activePage to homeScreen
  changePageToHomeScreen = () => {
    console.log("Page", this.state.activePage);
    if (this.state.activePage === "Music") {
      this.setState({
        activeItem: "Music",
        activePage: "Home",
      });
    } else if (
      this.state.activeItem === "MyMusic" ||
      this.state.activeItem === "Artists" ||
      this.state.activeItem == "Album"
    ) {
      this.setState({
        activeItem: "MyMusic",
        activePage: "Music",
      });
    } else if (this.state.activeItem === "NowPlaying") {
      this.setState({
        activeItem: "NowPlaying",
        activePage: "Home",
      });
    } else {
      this.setState({
        activeItem: this.state.activeItem,
        activePage: "Home",
      });
    }
  };
  //toggle the play and pause button using the play pause button on the wheel
  toggle = () => {
    if (this.state.activePage === "MyMusic") {
      if (this.state.play === true) {
        this.state.audio.pause();
        this.setState({
          play: false,
        });
      } else {
        this.state.audio.play();
        this.setState({
          play: true,
        });
      }
      console.log("toggled");
    }
  };
  //mount the audio with audio by gettig the audio
  componentDidMount() {
    let audio = document.getElementsByClassName("audio-element")[0];
    this.setState({
      audio: audio,
    });
  }
  render() {
    return (
      <div id="ipodContainer">
        <audio className="audio-element">
          <source src={sound}></source>
        </audio>
        <Screen
          activeItem={this.state.activeItem}
          activePage={this.state.activePage}
          audio={this.state.audio}
          play={this.state.play}
        />
        <div id="outer-button-container" onMouseOver={this.rotateWheel}>
          <div className="button-container">
            <div className="menu-button">
              <b onClick={this.changePageToHomeScreen}>
                <i className="fas fa-bars"></i>
              </b>
            </div>
          </div>
          <div className="button-container">
            <div className="inner-container">
              <div className="backward-button">
                <i className="fas fa-fast-backward"></i>
              </div>
              <div onClick={this.changePage} className="inner-circle"></div>
              <div className="forward-button">
                <i className="fas fa-fast-forward"></i>
              </div>
            </div>
          </div>

          <div className="button-container">
            <div onClick={this.toggle} className="play-pause-button">
              <i onClick={this.toggle} className="fas fa-play"></i>{" "}
              <i onClick={this.toggle} className="fas fa-pause"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Ipod;
