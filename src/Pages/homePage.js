import React from "react";
import FavoriteArtwork from "../components/favoriteArtwork";
import Header from "../components/header";
import Navbar from "../components/navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header
        title="Make a Profitable Entry Into the World of NFTs"
        number="10"
      />
      <FavoriteArtwork artworkTitle1="Modern Art" />
    </div>
  );
};

export default HomePage;
