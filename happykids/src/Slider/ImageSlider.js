import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css"; // Import your own CSS file for custom styles

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const sliderRef = useRef(null); // Ref to access the Slider component instance

  useEffect(() => {
    // Fetch images from API and set state
    fetch("https://skillkamp-api.com/v1/api/images/landing")
      .then((response) => response.json())
      .then((data) => setImages(data.detail))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  // Use state to manage the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    // Call slickPrev() method to go to previous slide
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    // Call slickNext() method to go to next slide
    sliderRef.current.slickNext();
  };

  const handleDotClick = (index) => {
    // Call slickGoTo() method to go to specific slide
    sliderRef.current.slickGoTo(index);
  };

  // Slider settings
  const sliderSettings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Add more settings as needed
    afterChange: (current) => setCurrentSlide(current), // Update current slide index
  };

  return (
    <div className="slider-container">
      <Slider {...sliderSettings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
            {index === 2 && ( // Conditionally render text for the third image
              <div className="text-container">
                <p className="image-text">NEW COLLECTION</p>
                <button className="shop-button">Shop</button>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
