import React from 'react';
import './style.scss';
import {Container, Row, Col} from 'react-bootstrap';
import { Card, iMac, Rectangle, Phone } from '../../Assets';

function Service({color}) {
  return (
    <Container>
        <div className='service__text'>
            <h2>Services that will help<br/><span style={{color: color.color}}>Your Buiseness</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere <br/>diam amet lacus in. Sed nibh eget lacinia nunc.</p>
        </div>
        <div className="Card__cont">
            <Row xs={1} md={3} className='justify-content-between align-items-center'>
                <Col>
                    <div className="w-100 service__card d-flex justify-content-center align-items-center text-center">
                        <img src={Card} alt="img.png" className='h-100 w-100' />
                        <h2 className='me-4'>UI/UX Design</h2>
                    </div>
                </Col>
                <Col>
                    <div className="w-100 service__card service__card-2 d-flex justify-content-center align-items-center text-center">
                        <img src={Rectangle} alt="img.png" className='h-100 w-100' />
                        <img src={iMac} alt="img.jpg" className='img-2'/>
                        <h2 className='me-4'>Web Development</h2>
                    </div>
                </Col>
                <Col>
                    <div className="w-100 service__card d-flex justify-content-center align-items-center text-center">
                        <img src={Rectangle} alt="img.png" className='h-100 w-100' />
                        <img src={Phone} alt="img.jpg" className='img-2'/>
                        <h2 className='me-4'>Progressive Web Apps</h2>
                    </div>
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </div>
    </Container>
  )
}

export default Service