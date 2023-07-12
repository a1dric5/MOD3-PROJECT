import React from 'react';
import './carousel.css';
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

/*import React from 'react';
import './carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import mod3pic1 from './assets/mod3pic1.png';
import mod3pic2 from './assets/mod3pic2.png';
import mod3pic3 from './assets/mod3pic3.png';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={mod3pic1} alt="Image 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={mod3pic2} alt="Image 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={mod3pic3} alt="Image 3" />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;*/
