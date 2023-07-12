import React from 'react';

import MyCarousel from '../../components/carousel/carousel';
import Testimonials from '../../components/testimonials/testimonials';
import Services from '../../components/services/services';
import SubscriptionPage from '../../components/subscription/subscription';
import InstructorsCarousel from '../../components/instructorscarousel/instructorscarousel';
import BlogArticles from '../../components/blogarticles/blogarticle';
import './home.css';
 
const Home = () => {
  return (
    <div>
      <MyCarousel/>
      <Testimonials />
      <Services />
      <SubscriptionPage/>


      <InstructorsCarousel/>
      <BlogArticles/>
    </div>
  );
};

export default Home;



