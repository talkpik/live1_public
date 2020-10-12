import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Services from './Services';
import Seeker from './Seeker';
import Speaker from './Speaker';
import Events from './Events';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar/>
        <Header/>
        <Services/>
	      <Seeker/>
	      <Speaker/>
        <Events/>
	      <Team/>
	      <Contact/>
	      <Footer/>
    </div>
   );
  }
}
export default App;