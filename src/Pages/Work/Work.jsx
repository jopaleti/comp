import React from 'react';
import { Footer, Navbar, What } from '../../Components';
import './style.scss';

const color = {
    color: '#6155A6',
}
function Work() {
  return (
    <div className='work__page'>
        <div className="navbar">
            <Navbar />
        </div>
        <div className="what">
            <What color={color} />
        </div>
        <div className="footer bg-light mt-5">
            <Footer />
        </div>
    </div>
  )
}

export default Work