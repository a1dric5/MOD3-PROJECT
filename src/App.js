import React,{ useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import About from './src/pages/about';
// import ApplicationForm from './pages/applicationform';
import Contact from './src/pages/contact';
import Navbar from './components/navbar';
// import SummerCamp from './components/SummerCamp';
// import CareerAdvice from './components/CareerAdvice';

function App() {
  // const [open, setOpen] = useState(false);
  return (
    <div>
      <Router basename="/">

        {/* Add Menu Component */}
        <Navbar setOpen={setOpen} />
        
        <Switch> 
          <Route exact path="/" component={About}/>
          {/* <Route path="/ApplicationForm" render={() => <ApplicationForm open={open} setOpen={setOpen} />}/>
          <Route path="/SummerCamp" component={SummerCamp}/>
          <Route path="/CareerAdvice" component={CareerAdvice}/> */}
          <Route path="/Contact" component={Contact}/>

          
        </Switch>
      </Router>

    </div>
  );
}

export default App;
