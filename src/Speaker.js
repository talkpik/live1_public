import React, {Component} from 'react';
import Dialog from './Dialog';

class Speaker extends Component {
state={isOpen:false}
render(){
  return (
    <div id="speaker" className="basic-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="image-container">
                        <img className="img-fluid" src="images/pic4.png" alt="alternative"/>
                    </div> 
                </div> 
                <div className="col-lg-6">
                    <div className="text-container">
                        <h2 className="mustard">Speaker</h2>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-check"></i>
                                <div className="media-body">Give back to community by sharing experience & advice</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-check"></i>
                                <div className="media-body">Address multiple seekers at once</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-check"></i>
                                <div className="media-body">Proudly share via Social Media</div>
                            </li>
                        </ul>
                        <button className="btn-solid-reg popup-with-move-anim" onClick={(e) => this.setState({isOpen:true})} >REGISTER</button>
	  					<Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen:false})}>
	  						<iframe title="speakerform" src="https://formfaca.de/sm/chwlh-WRR" width="640" height="500" frameBorder="0" marginheight="0" marginwidth="0">Loading…</iframe>
						</Dialog>
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 
  );
}
}

export default Speaker;