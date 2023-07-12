import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './instructorscarousel.css';

const instructors = [
  {
    name: 'Christina Nguyen',
    specialty: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod metus eu elit iaculis consectetur.',
    imageUrl: 'assets/christinanguyenpfp.png', // Replace with the image URL or path
  },
  {
    name: 'Juanita Gomez',
    specialty: 'Data Science',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod metus eu elit iaculis consectetur.',
    imageUrl: 'assets/juanitagomezpfp.png', // Replace with the image URL or path
  },
  {
    name: 'Emily Johnson',
    specialty: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod metus eu elit iaculis consectetur.',
    imageUrl: 'assets/emilyjohnsonpfp.png', // Replace with the image URL or path
  },
  // Add more instructors as needed
];

const InstructorsCarousel = () => {
  return (
    <Carousel>
      {instructors.map((instructor, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={instructor.imageUrl}
            alt={instructor.name}
          />
          <Carousel.Caption>
            <h3>{instructor.name}</h3>
            <p>{instructor.specialty}</p>
            <p>{instructor.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default InstructorsCarousel;
