import React from 'react';
import './testimonials.css';

const testimonials = [
  {
    name: 'Person 1',
    testimonial: 'I greatly benefited from the educational consulting program. The guidance and support provided by the instructors helped me excel in my tech program and achieve my career goals.',
  },
  {
    name: 'Person 2',
    testimonial: 'The online educational consulting program has been a game-changer for me. The personalized mentorship and resources provided have enhanced my learning experience and boosted my confidence in pursuing a tech career.',
  },
  {
    name: 'Person 3',
    testimonial: 'I highly recommend the educational consulting program. The expert advice and industry insights I received have been invaluable in shaping my educational journey and preparing me for the tech industry.',
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div>
      <h2>Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.testimonial}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
