import React from 'react';
import './index.css';
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="mod3pic1.jpg" alt="Image 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="mod3pic2.jpg" alt="Image 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="mod3pic3.jpg" alt="Image 3" />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
