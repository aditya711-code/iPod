import React from "react";
import "../styles/Screen.css";
class Games extends React.Component {
  render() {
    return (
      <div className="games">
        <div className="title-bar">
          <p>Games</p>
          <img src="https://cdn-icons-png.flaticon.com/512/686/686589.png" />
        </div>
        <div className="game-content">
          <img
            className="game-gif"
            src="https://media.giphy.com/media/N0NAZ9Nj6wexa/giphy-downsized-large.gif"
          />
        </div>
      </div>
    );
  }
}
export default Games;
