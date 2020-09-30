
import React, { Component } from 'react';
import logo from './img/abstract-logo.jpg';
import logo2 from './img/abstract-logo2.jpg';
import logo3 from './img/abstract-logo3.jpg';
import logo4 from './img/abstract-logo4.jpg';

export default class DisplayCard extends Component {


    render() {
        
        return (


            <div
                className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col-auto flex-column">
                
                <img src={require('./img/abstract-logo.jpg')} width="200" height="200" />
                    {/* <DisplayLogo img={this.props.img} /> */}
                </div>
                <div className="col p-4 d-flex flex-column position-static">
                    <a href="Sponsor1.html" class="stretched-link">
                        <strong className="d-inline-block mb-2 text-primary">{this.props.name}</strong>
                        <p className="card-text mb-auto">{this.props.desc}</p>
                    </a>
                </div>




            </div>)

    }
}
