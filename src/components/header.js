import React from "react";

const Header = (props) => {
  return (
    <section className="header-section">
      <div className="header-img">
        <img src="./images/Group 10431.svg" alt="" />
      </div>
      <div className="header-text">
        <h2>{props.title}</h2>
        <img className="stars" src="./images/Group 3.svg" alt="" />
        <hr />
        <p>
          Not a designer? {props.number} Not a problem! We’ll bring the artistic
          finesse your NFT project needs to climb the ladders of success and
          generate attractive profits for you.
        </p>
        <button>Contact Us</button>
        <img className="down-arrow" src="./images/Group 4.svg" alt="" />
      </div>
    </section>
  );
};

export default Header;
