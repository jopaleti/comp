import React from 'react';
import './style.scss'
import {Container, Row, Col} from 'react-bootstrap'
import Button from '../Button/Button';
import { mac, pwa, Sketch } from '../../Assets';

function Do({color}) {
  return (
    <Container>
        <Row xs={1} md={2} className='justify-content-between'>
            <Col md={{order: 0}}>
                <div className="do__items">
                    <h2 className='mb-3'>Web Development</h2>
                    <small style={{color: color.color}}>Website and Web App Development</small>
                    <p className='mt-2'>A website is something that gives you and your<br/>
                    buisness a Web presence. Here at Syntrax, We<br/>
                    exactly take care of that.
                    </p>
                    <div className='mt-4'>
                        <Button text='More' />
                    </div>
                </div>
            </Col>
            <Col md={{order: 1 }}>
                <div className='w-100 mt-md-4'>
                    <img src={mac} alt="mac.jpg" className='w-100' />
                </div>
            </Col>
            <Col xs={{ span: 12, order: 3 }} md={{order: 2 }}>
                <div className='w-100'>
                    <img src={pwa} alt="mac.jpg" className='w-100' />
                </div>
            </Col>
            <Col xs={{ span: 12, order: 2 }} md={{order: 3 }}>
                <div className="do__items do__second__grid">
                    <h2 className='mb-3'>Progressive web<br/>Apps</h2>
                    <small style={{color: color.color}}>Progressive web app developmen</small>
                    <p className='mt-2'>Progressive web apps are the futre of <br/>
                    Modern web and We understand that as<br/>
                    We’ve been working with those.
                    </p>
                    <div className='mt-4'>
                        <Button text='More' />
                    </div>
                </div>
            </Col>
            <Col xs={{ span: 12, order: 4 }} md={{order: 4 }}>
                <div className="do__items mt-md-5">
                    <h2 className='mb-3'>User interface<br/>Design</h2>
                    <small style={{color: color.color}}>User interface and User experience design</small>
                    <p className='mt-2'>As a Design focused digital agency we are highly<br/>
                    concerned about the overall product design.
                    </p>
                    <div className='mt-4'>
                        <Button text='More' />
                    </div>
                </div>
            </Col>
            <Col xs={{ span: 12, order: 5 }} md={{order: 5 }}>
                <div className='w-100 mt-md-4'>
                    <img src={Sketch} alt="mac.jpg" className='w-100' />
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Do