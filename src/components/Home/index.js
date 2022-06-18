import React from "react";
import { BannerOne, Banners, BannerTwo } from "./HomeElements";
import bOne from "../../images/bannerOne.jpg";
import bTwo from "../../images/bannerTwo.jpg";

const Home = (props) => {
  return (
    <>
      {/* <h1>Banner</h1> */}
      <Banners>
        <BannerOne
          src={bOne}
          onClick={() => alert("For Demonstration Purposes Only")}
        ></BannerOne>
        <BannerTwo
          src={bTwo}
          onClick={() => alert("For Demonstration Purposes Only")}
        ></BannerTwo>
      </Banners>
    </>
  );
};

export default Home;
