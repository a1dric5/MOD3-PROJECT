import React from 'react';
import './services.css';

const services = [
  {
    title: 'Mentorship',
    description: 'Receive personalized guidance and support from experienced mentors in various educational fields to help you achieve your academic goals.',
    icon: 'icon-mentorship', // Add appropriate icon class or SVG here
  },
  {
    title: 'Portfolio Building',
    description: 'Create a standout portfolio showcasing your skills and achievements to enhance your academic and professional opportunities.',
    icon: 'icon-portfolio', // Add appropriate icon class or SVG here
  },
  {
    title: 'Professional Development',
    description: 'Enhance your professional skills and stay up-to-date with the latest industry trends through workshops, training sessions, and resources.',
    icon: 'icon-professional-development', // Add appropriate icon class or SVG here
  },
  {
    title: 'College Applications',
    description: 'Get expert guidance throughout the college application process, including essay reviews, interview preparation, and selecting the right schools.',
    icon: 'icon-college-applications', // Add appropriate icon class or SVG here
  },
  // Add more services as needed
];

const Services = () => {
  return (
    <div className="services">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="service-icon">
            <i className={service.icon}></i> {/* Replace with appropriate icon element */}
          </div>
          <h2 className="service-title">{service.title}</h2>
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
