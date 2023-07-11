import React,{ useState } from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';

import Home from '../src/pages/home';
import About from '../src/pages/about';
import Contact from '../src/pages/contact';

import ApplicationForm from './components/applicationform';
import Navbar from './components/navbar';
import SummerCamp from './components/summercamp';
import CareerAdvice from './components/careeradvice';
import Footer from './components/footer';

// import SubscriptionPage from './components/subscription';

import Carousel from './components/carousel';
// import HeroImage from './componentst/heroimage';
import Testimonials from './components/testimonials';
import Services from './components/services';
import Subscription from './components/subscription';
import TeacherCarousel from './components/teachercarousel';
import BlogArticles from './components/blogarticles';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      
      <Navbar setOpen={setOpen} />
      <Routes>
        {/* Add Menu Component */}
        
       
          <Route exact path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Application Form" render={() => <ApplicationForm open={open} setOpen={setOpen} />}/>
          <Route path="/Summer Camp" element={<SummerCamp/>}/>
          <Route path="/Career Advice" element={<CareerAdvice/>}/>
          <Route path="/Contact" element={<Contact/>}/>

          {/* <Route exact path="/Subscription" component={SubscriptionPage} /> */}
      </Routes>

      <Carousel />
      {/* <HeroImage /> */}
      <Testimonials />
      <Services />
      <Subscription />
      <TeacherCarousel />
      <BlogArticles />

      <Footer />

    </div>
  );
}

export default App;

