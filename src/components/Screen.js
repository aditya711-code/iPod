import React from "react";
import "../styles/Screen.css";
import Index from "./index";
//to manage different component on the screen
class Screen extends React.Component {
  render() {
    return (
      <div className="screen-container">
        {this.props.activePage === "Home" ? (
          <Index.Home activeItem={this.props.activeItem} />
        ) : null}
        {this.props.activePage === "Music" ? (
          <Index.Music activeItem={this.props.activeItem} />
        ) : null}
        {this.props.activePage === "Games" ? <Index.Games /> : null}
        {this.props.activePage === "Settings" ? <Index.Settings /> : null}
        {this.props.activePage === "MyMusic" ? (
          <Index.MyMusic audio={this.props.audio} play={this.props.play} />
        ) : null}
        {this.props.activePage === "Artists" ? <Index.Artist /> : null}
        {this.props.activePage === "Album" ? <Index.Album /> : null}
      </div>
    );
  }
}
export default Screen;
