import React from 'react';
import './style.scss';
import {Container,} from 'react-bootstrap';
import { List, X } from 'react-bootstrap-icons';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const [side, setSide] = useState(false);
  return (
    <Container>
        <div className="d-flex justify-content-between align-items-center pt-4 w-100">
            <h2 className='nav__logo'>Syntrax</h2>
            <div className="d-inline-flex align-items-center nav__right">
                <h6 className='me-4'><Link to='/' className='text-decoration-none link'>Home</Link></h6>
                <h6 className='me-4'><Link to='/work' className='text-decoration-none link'>Work</Link></h6>
                <h6 className='me-4'><Link to='/service' className='text-decoration-none link'>What we do</Link></h6>
                <h6 className='me-4'><Link to='/about' className='text-decoration-none link'>About</Link></h6>
                <h6><Link to='/contact' className='text-decoration-none link'>Contact</Link></h6>
            </div>
            <div className='handburger' onClick={() => setSide(prevState => !prevState)}><List size={25} /></div>
        </div>
        {side && 
            <div className="overlay p-5">
                <div className='cross' onClick={() => setSide(prevState => !prevState)}><X size={50} /> </div>
                <h6 className='mb-4'><Link to='/' className='text-decoration-none link'>Home</Link></h6>
                <h6 className='mb-4'><Link to='/work' className='text-decoration-none link'>Work</Link></h6>
                <h6 className='mb-4'><Link to='/service' className='text-decoration-none link'>What we do</Link></h6>
                <h6 className='mb-4'><Link to='/about' className='text-decoration-none link'>About</Link></h6>
                <h6><Link to='/contact' className='text-decoration-none link'>Contact</Link></h6>
            </div>
        }
    </Container>
  )
}

export default Navbar