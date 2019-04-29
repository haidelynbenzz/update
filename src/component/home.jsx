import React, { Component } from 'react';
import '../css/home.css';

import gallery from '../img/header.png';

class Home extends Component {


    render() {
        return (

            <div>
                <div className="main-content">
                    <div className="title">
                        Welcome Admin!!! 
			        </div>
                    <div className="container">
                                <img src={gallery} className="gallery" />
                    </div>

                   
                </div>
            </div>
        );
    }
}
export default Home;