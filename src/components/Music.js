import React from "react";
import "../styles/Screen.css";
//Music Page with different pages options
class Music extends React.Component {
  render() {
    return (
      <div className="music">
        <div className="music-list">
          <div className="title-bar">
            <p>Music</p>
            <img src="https://cdn-icons-png.flaticon.com/512/461/461146.png"></img>
          </div>
          <div class="nav-links">
            <div
              className={this.props.activeItem === "MyMusic" ? "highlight" : ""}
            >
              <p>
                MyMusic
                {this.props.activeItem === "MyMusic" ? (
                  <span style={{ float: "right", fontWeight: "bold" }}>
                    &gt;
                  </span>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div
              className={this.props.activeItem === "Artists" ? "highlight" : ""}
            >
              <p>
                Artist
                {this.props.activeItem === "Artists" ? (
                  <span style={{ float: "right", fontWeight: "bold" }}>
                    &gt;
                  </span>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div
              className={this.props.activeItem === "Album" ? "highlight" : ""}
            >
              <p>
                Album
                {this.props.activeItem === "Album" ? (
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
        <div className="image-container-music"></div>
      </div>
    );
  }
}
export default Music;
