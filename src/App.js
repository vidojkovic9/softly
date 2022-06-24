import React from "react";
import Button from "./components/Button";
//import Polygon from "./components/Button/Polygon";
//import Footer from "./components/Footer/Footer";
//import AuctionItem from "./components/AuctionItem";
//import Intro from "./components/Intro/Intro";
import IntroductionAndConclusion from "./components/IntroductionAndConclusion";
//import Auctions from "./components/Auctions";
//import Experiences from "./components/Experiences";
//import Img from "./components/Intro/Img";

const App = () => {
  return (
    <div>
      <IntroductionAndConclusion
        title={"Title"}
        buttonName={"CTA TEXT"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }
      ></IntroductionAndConclusion>
      <IntroductionAndConclusion
        title={"Sell with Softly"}
        buttonName={"START"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }
        img={"./images/Rectangle 14.jpg"}
      ></IntroductionAndConclusion>
      <div style={{ margin: "5px" }}>
        <Button>BID</Button>
      </div>
      <div style={{ margin: "5px" }}>
        <Button styleForButton={"secondary"}>OUT BID</Button>
      </div>
      <div style={{ margin: "5px" }}>
        <Button styleForButton={"seeMore"} icon={"./images/Polygon1.svg"}>
          See More
        </Button>
      </div>
      <div style={{ margin: "5px" }}>
        <Button styleForButton={"loadMore"} icon={"./images/Polygon1.svg"}>
          Load More
        </Button>
      </div>
      <div style={{ margin: "5px" }}>
        <Button styleForButton={"sortBy"} icon={"./images/Polygon1.svg"}>
          Sort By
        </Button>
      </div>
    </div>
  );
};

export default App;
