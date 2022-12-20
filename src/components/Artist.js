import React from "react";
class Artist extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="title-bar">
          <p>Artist</p>
          <img src="https://cdn-icons-png.flaticon.com/512/2908/2908584.png" />
        </div>
        <div className="content">
          <img
            src="https://scontent.fbom13-1.fna.fbcdn.net/v/t39.30808-6/279861926_3305974866394912_6336179156892676535_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ADKLO26jlTEAX-r72Lo&_nc_ht=scontent.fbom13-1.fna&oh=00_AfCwLndGqkpEuSu6GlXlrcwApZvn1tYCkJJwsxR7f4Bzhg&oe=63A4717F"
            alt=""
          />
          <h2>KING</h2>
        </div>
      </div>
    );
  }
}
export default Artist;
