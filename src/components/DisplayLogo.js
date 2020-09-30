import React, { Component } from 'react';
import logo from './img/abstract-logo.jpg';
import logo2 from './img/abstract-logo2.jpg';
import logo3 from './img/abstract-logo3.jpg';
import logo4 from './img/abstract-logo4.jpg';
export default class DisplayLogo extends Component {

  render() {
    return (
      
          <img src={(this.props.img)} width="200" height="200" />
        
    );
  }
} 