import React from "react";
class Album extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="title-bar">
          <p>Album</p>
          <img src="https://cdn-icons-png.flaticon.com/512/26/26805.png"></img>
        </div>
        <div className="content">
          <img
            src="https://as2.ftcdn.net/v2/jpg/03/00/98/13/1000_F_300981301_IIy4dvhYBFYb8CpvCq1BAgMkNjwCct4k.jpg"
            alt="Album"
          />
          <h2>ALBUM</h2>
        </div>
      </div>
    );
  }
}
export default Album;
