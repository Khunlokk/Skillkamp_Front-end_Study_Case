import React from "react";
import ImageSlider from "../Slider/ImageSlider";
import "./Home.css";
import CardProductSlider from "../CardProductOnNewArrivals/CardProductSlider";

function Home() {
  return (
    <div>
      <ImageSlider />
      <h2 className="NewArrivals">New Arrivals</h2>
      <CardProductSlider />
    </div>
  );
}

export default Home;
