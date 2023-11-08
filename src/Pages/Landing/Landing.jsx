import React from 'react';
import { Footer, Help, Navbar, Service, Work } from '../../Components';
import './style.scss';

const color = {
    color: '#6155A6',
}

function Landing() {
  return (
    <div className='landing'>
        <div className="navbar">
            <Navbar />
        </div>
        <div className="help">
            <Help color={color}/>
        </div>
        <div className="service">
            <Service color={color} />
        </div>
        <div className="work">
            <Work color={color} />
        </div>
        <div className="footer bg-light mt-5">
            <Footer />
        </div>
    </div>
  )
}

export default Landing