import React from "react";
import { data } from "./data";

const FavoriteArtwork = (props) => {
  return (
    <section className="artwork-section">
      {/* This is first part */}
      <h2 className="artwork-heading">
        Our Favorite
        <span className="artwork-text"> Artwork </span>
      </h2>
      <div className="cards-container">
        {data.map((item) => (
          <div className="card-1">
            <div className="card-text">
              <h3>{item.title}</h3>
              <p>{item.numberOfArts}</p>
            </div>
          </div>
        ))}
      </div>
      {/* This is the second part */}
      <div className="NFT-life-container">
        <div className="NFT-life-text">
          <h2>
            We’ll Bring Your <span className="NFT-life-span">NFTs</span> To Life
          </h2>
          <p>
            You’ll bring your vision. We’ll bring our unbounded creativity and
            meticulous execution. By combining our forces, we’ll make magic
            happen and boost your NFT project from a distant dream to worldwide
            success.
          </p>
          <button>Check Our Profitable NFT Design Services</button>
        </div>
        <div className="NFT-life-img">
          <img src="./images/Group-img.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default FavoriteArtwork;
