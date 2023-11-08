import React from 'react';
import { Do, Footer, Great, Navbar } from '../../Components';
import './style.scss';

const color = {
    color: '#6155A6',
}

function Service() {
  return (
    <div className='service'>
        <div className="navbar">
            <Navbar />
        </div>
        <div className="service">
            <Great color={color} />
        </div>
        <div className="do mt-5">
            <Do color={color} />
        </div>
        <div className="footer bg-light mt-5">
            <Footer />
        </div>
    </div>
  )
}

export default Service