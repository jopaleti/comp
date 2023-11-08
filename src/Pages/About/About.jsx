import React from 'react';
import './style.scss';
import {Container, Row, Col} from 'react-bootstrap';
import { Button, Footer, Navbar } from '../../Components';
import { hand, unsplash, unsplash2 } from '../../Assets';

const color = {
    color: '#F092CB',
}

function About() {
  return (
    <div className='about'>
        <div className="navbar">
            <Navbar />
        </div>
        <div className="main">
            <Container>
            <div className="about__container text-center mt-5">
                <h2 className='mb-3'>We are helping <span style={{color: color ? color.color : '#000000'}}>people</span> with<br/>building their <span style={{color: color ? color.color : '#000000'}}>brands</span>.</h2>
                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget vulputate nunc<br/>cras odio non, lacus, feugiat.</small>
                {/* <div className="d-flex align-items-center justify-content-center mt-4 gap-3 text-center button__group">
                    <Button />
                    <span>Lets  connect <ArrowRight size={20} /></span>
                </div> */}
                <div className="about__image">
                    <img src={hand} alt="img.png" className='w-100 h-100' />
                </div>
                <div className="about__btn text-center w-100 mt-4">
                    <Button text='Our Story' />
                </div>
            </div>
            </Container>
            <div className="about__gallery mt-4">
                <Container>
                    <Row xs={1} md={2} className='justify-content-between align-items-center'>
                        <Col md={{order: 0}}>
                            <div className="do__items">
                                <h2 className='mb-3'>Web Development</h2>
                                <small style={{color: color.color}}>Website and Web App Development</small>
                                <p className='mt-2'>A website is something that gives you and your<br/>
                                buisness a Web presence. Here at Syntrax, We<br/>
                                exactly take care of that.
                                </p>
                                <div className='mt-4 mb-4'>
                                    <Button text='More' />
                                </div>
                            </div>
                        </Col>
                        <Col md={{order: 1 }}>
                            <div className='gal__cont mt-md-4'>
                                <img src={unsplash} alt="mac.jpg" className='w-100 h-100' />
                            </div>
                        </Col>
                        <Col xs={{ span: 12, order: 3 }} md={{order: 2 }}>
                            <div className='gal__cont2'>
                                <img src={unsplash2} alt="mac.jpg" className='w-100' />
                            </div>
                        </Col>
                        <Col xs={{ span: 12, order: 2 }} md={{order: 3 }}>
                            <div className="do__items mt-4 mt-md-1">
                                <h2 className='mb-3'>Progressive web<br/>Apps</h2>
                                <small style={{color: color.color}}>Progressive web app development</small>
                                <p className='mt-2'>Progressive web apps are the futre of <br/>
                                Modern web and We understand that as<br/>
                                We’ve been working with those.
                                </p>
                                <div className='mt-4 mb-4'>
                                    <Button text='More' />
                                </div>
                            </div>
                        </Col>
                        
                    </Row>

                    <div className="what__text text-center mt-5">
                        <h1>Excited to work <span style={{color: color.color}}>with </span> us ? <br/>Lets Connect </h1>
                        <div className='text-center mt-4 mt-md-5'>
                            <Button text='Contact us' />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
        <div className="footer bg-light mt-5">
            <Footer />
        </div>
    </div>
  )
}

export default About