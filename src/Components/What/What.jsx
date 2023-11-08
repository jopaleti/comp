import React from 'react';
import './style.scss';
import {Container, Row, Col} from 'react-bootstrap';
import {  Rectangle5, Rectangle6, Rectangle7, Rectangle8, work } from '../../Assets';
import Button from '../Button/Button';

function What({color}) {
  return (
        <Container>
            <div className="text-center what__container mt-5">
                <h1>What <span style={{color: color.color}}>we've</span> been working on</h1>
                <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Ante lectus augue egestas sit morbi in tincidunt<br/> auctor sapien.</p>
                <div className="img__container">
                    <img src={work} alt="img.png" className="w-100 h-100" />
                </div>
            </div>
            <div className="what__recent mt-4">
                <h2>Our recent work</h2>
                <small>Check out our recent work</small>
                <div className="button__group mt-4">
                    <a href='/' className='me-3 me-sm-4 px-3 py-2 text-white button text-decoration-none'>Website</a>
                    <a href='/' className='me-3 me-sm-4 ad__btn px-3 py-2 button text-decoration-none'>UI/UX</a>
                    <a href='/' className='me-sm-4 ad__btn px-3 py-2 button text-decoration-none'>PWA's</a>
                </div>
                <div className="stack mt-5">
                    <Row style={{position: 'relative'}} xs={1} md={2} className='gy-5 gy-md-auto justify-content-between align-items-start'>
                        <Col className=''>
                            <div className="stack__cont stack__cont__spec bg-light shadow-lg">
                                <img src={Rectangle5} alt="img.jpg" className='stack__img w-100' />
                                <div className='p-4'>
                                    <h2 className='me-4 mb-0 w-100'>SanpChat Clone</h2>
                                    <small className='text-secondary w-100'>View Project</small>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="stack__cont stack__cont__spec-1 bg-light shadow-lg">
                                <img src={Rectangle6} alt="img.jpg" className='stack__img w-100' />
                                <div className='p-4'>
                                    <h2 className='me-4 mb-0 w-100'>Drumlotion Production</h2>
                                    <small className='text-secondary w-100'>View Project</small>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="stack__cont .stack__cont__spec-2 bg-light shadow-lg">
                                <img src={Rectangle7} alt="img.jpg" className='stack__img w-100' />
                                <div className='p-4'>
                                    <h2 className='me-4 mb-0 w-100'>Pagoda Partners</h2>
                                    <small className='text-secondary w-100'>View Project</small>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="stack__cont bg-light shadow-lg">
                                <img src={Rectangle8} alt="img.jpg" className='stack__img w-100' />
                                <div className='p-4'>
                                    <h2 className='me-4 mb-0 w-100'>E-learning App</h2>
                                    <small className='text-secondary w-100'>View Project</small>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="what__text text-center mt-5">
                    <h1>Got a <span style={{color: color.color}}>Project </span>for us ? Let’s Connect</h1>
                    <div className='text-center mt-4 mt-md-5'>
                        <Button text='Contact us' />
                    </div>
                </div>
            </div>
        </Container>
  )
}

export default What