import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
// import MyCarousel from 'react-bootstrap/Carousel';

// import Home from '../src/pages/home';
// import About from '../src/pages/about';
// import Contact from '../src/pages/contact';

// import ApplicationForm from './components/applicationform';
import Navbar from './components/navbar';
// import SummerCamp from './components/summercamp';
// import CareerAdvice from './components/careeradvice';
import Footer from './components/footer';

// import SubscriptionPage from './components/subscription';


import Testimonials from './components/testimonials';
// import Services from './components/services';
// import Subscription from './components/subscription';
// import TeacherCarousel from './components/teachercarousel';
// import BlogArticles from './components/blogarticles';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar setOpen={setOpen} />
      {/* <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/ApplicationForm" element={<ApplicationForm open={open} setOpen={setOpen} />} />
      <Route path="/SummerCamp" element={<SummerCamp />} />
      <Route path="/CareerAdvice" element={<CareerAdvice />} />
      <Route path="/Contact" element={<Contact />} /> */}

      {/* <Route exact path="/Subscription" component={SubscriptionPage} /> */}

{/* <HeroImage /> */}
      {/* <MyCarousel />
      
      <Testimonials />
      <Services />
      <Subscription />
      <TeacherCarousel />
      <BlogArticles /> */}

      <Testimonials />

      <Footer />
    </div>
  );
}

export default App;

