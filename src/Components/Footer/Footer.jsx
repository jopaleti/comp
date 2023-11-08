import React from 'react';
import './style.scss';
import {Container, Row, Col} from 'react-bootstrap';
import { Dribbble, Facebook, Instagram, Twitter, Linkedin, Envelope, Phone } from 'react-bootstrap-icons';

function Footer() {
  return (
    <Container>
        <Row xs={1} sm={2} md={3} className='justify-content-aroun align-items-start'>
            <Col>
                <div className='ms-md-4 ps-4 ps-sm-5 footer__item pt-5'>
                    <h2>
                    Syntrax
                    </h2>
                    <small>
                    Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. Leo<br/> pulvinar sit sed eu nulla risus quis<br/> amet.
                    </small>
                    <div className='d-flex align-items-center gap-3 mt-4'>
                        <Facebook />
                        <Twitter />
                        <Instagram />
                        <Dribbble />
                        <Linkedin />
                    </div>
                </div>
            </Col>
            <Col>
                <div className='ms-md-4 ps-4 ps-sm-5 footer__item pt-5'>
                    <h2>
                    Contact
                    </h2>
                    <div className="d-flex align-items-center gap-3">
                        <div><Envelope /></div>
                        <small>contactatsytrax@gmail.com</small>
                    </div>
                    <div className="d-flex align-items-center gap-3 mt-3">
                        <div><Phone /></div>
                        <small>+91 6266625558</small>
                    </div>
                </div>
            </Col>
            <Col>
                <div className='ms-md-4 ps-4 ps-sm-5 footer__item pt-5'>
                    <h2>
                    About
                    </h2>
                    <small className='d-block mb-3'>
                    About Us
                    </small>
                    <small>
                    Contact us
                    </small>
                    
                </div></Col>
        </Row>
        <div className="ms-md-4 ps-4 ps-sm-5 mt-4 foot">
            <small className='text-secondary'>2020 Syntrax.in All Rights Reserved</small>
        </div>
    </Container>
  )
}

export default Footer