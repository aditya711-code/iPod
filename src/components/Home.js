import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="homeScreen">
        <div className="music-list">
          <div className="title-bar">
            <p>iPod</p>
            <img src="https://cdn-icons-png.flaticon.com/512/447/447591.png" />
          </div>
          <div class="nav-links">
            <div
              className={
                this.props.activeItem === "NowPlaying" ? "highlight" : ""
              }
            >
              <p>
                Now Playing{" "}
                {this.props.activeItem === "NowPlaying" ? (
                  <span style={{ float: "right", fontWeight: "bold" }}>
                    &gt;
                  </span>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div
              className={this.props.activeItem === "Music" ? "highlight" : ""}
            >
              <p>
                {" "}
                Music
                {this.props.activeItem === "Music" ? (
                  <span style={{ float: "right", fontWeight: "bold" }}>
                    &gt;
                  </span>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div
              className={this.props.activeItem === "Games" ? "highlight" : ""}
            >
              <p>
                Games
                {this.props.activeItem === "Games" ? (
                  <span style={{ float: "right", fontWeight: "bold" }}>
                    &gt;
                  </span>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div
              className={
                this.props.activeItem === "Settings" ? "highlight" : ""
              }
            >
              <p>
                Settings
                {this.props.activeItem === "Settings" ? (
                  <span style={{ float: "right", fontWeight: "bold" }}>
                    &gt;
                  </span>
                ) : (
                  ""
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="image-container-home"></div>
      </div>
    );
  }
}
export default Home;
