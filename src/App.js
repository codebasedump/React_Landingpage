import './App.css';
import Navigation from './Components/navigation';
import Home from './Components/home';
import About from './Components/about';
import Services from './Components/services';
import Portfolio from './Components/portfolio';
import Team from './Components/team';
import Testimonials from './Components/testimonials'
import Contact from './Components/contact';
import Footer from './Components/footer';
import React, { useEffect, useState } from 'react';
import JsonData from './data/data.json';

function App () {
  const [LandingPageData, setLandingPageData] = useState({});

  useEffect(() =>{
    setLandingPageData(JsonData);
  }, []);
  
  return (
    <div className="App">
      <Navigation/>
      <Home data={LandingPageData.Home}/>
      <About data={LandingPageData.About}/>
      <Services data={LandingPageData.Services}/>
      <Portfolio data={LandingPageData.Portfolio}/>
      <Team data={LandingPageData.Team}/>
      <Testimonials data={LandingPageData.Testimonials}/>
      <Contact data={LandingPageData.Contact}/>
      <Footer data={LandingPageData.Footer}/>
    </div>
  );
}

export default App;
