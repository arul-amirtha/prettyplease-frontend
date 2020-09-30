import React, { Component, useState } from 'react';
import PPNavbar from './PPNavbar';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from './img/abstract-logo.jpg';
import logo2 from './img/abstract-logo2.jpg';
import logo3 from './img/abstract-logo3.jpg';
import logo4 from './img/abstract-logo4.jpg';
import { render } from '@testing-library/react';
import DisplayCard from './DisplayCard';






function CharityPage({ charity }) {
    const [navitems, setnavitems] = useState([
        { itemName: "Review and Accept", itemLink: "", itemAddr: "", activePage: true },
        { itemName: "Fund Request", itemLink: "/FundRequest", itemAddr: "FundRequest/", activePage: false }

    ]);
    const [showProfile, setshowProfile] = useState(true);


    return (
        <div className="ReviewAccept">
            <PPNavbar NavItems={navitems} showProfile={showProfile} />
            <div class="container">

                <p class="text-justify mt-4">You have received {charity.length} offers for the request you made on 21/09/2020</p>
                
                
                {charity.map(ch => <DisplayCard spimg={ch.sponsorImg} name={ch.sponsorName} desc={ch.sponsorDesc} />)}
                

            </div>

        </div>


    );
}



export default CharityPage;