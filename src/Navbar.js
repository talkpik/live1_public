import React, {Component} from 'react';

class Navbar extends Component {
render(){
  return (
	<div>
	  <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <a className="navbar-brand logo-image" href="https://www.talkpik.com"><img src="images/logo_new.png" alt="alternative"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-awesome fas fa-bars"></span>
            <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#header">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#services">Services</a>
                </li>
				<li className="nav-item">
                    <a className="nav-link page-scroll" href="#seeker">Seeker</a>
                </li>
				<li className="nav-item">
                    <a className="nav-link page-scroll" href="#speaker">Speaker</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#event">Events</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#about">Team</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#contact">Contact</a>
                </li>
            </ul>
            <span className="nav-item social-icons">
                <span className="fa-stack">
                    <a target="_blank" href="https://www.facebook.com/talkpik2020/">
                        <i className="fas fa-circle fa-stack-2x facebook"></i>
                        <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span className="fa-stack">
                    <a target="_blank" href=" https://twitter.com/talkpik2020">
                        <i className="fas fa-circle fa-stack-2x twitter"></i>
                        <i className="fab fa-twitter fa-stack-1x"></i>
                    </a>
                </span>
				<span className="fa-stack">
                	<a target="_blank" href="https://instagram.com/talkpik2020">
						<i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-instagram fa-stack-1x"></i>
                     </a>
                 </span>
                 <span className="fa-stack">
                 	<a target="_blank" href="https://www.linkedin.com/company/talkpik/">
						<i className="fas fa-circle fa-stack-2x"></i>
						<i className="fab fa-linkedin-in fa-stack-1x"></i>
                    </a>
                 </span>
            </span>
        </div>
    </nav> 
	
    </div>
    
  );
}
}

export default Navbar;