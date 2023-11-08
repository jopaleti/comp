import React from 'react';
import './style.scss';
import {Container, Row, Col} from 'react-bootstrap';
import { Rectangle2, Rectangle3, Rectangle4, Snap, Wave } from '../../Assets';
import Button from '../Button/Button';

function Work({color}) {
  return (
    <Container>
       <div className="work__container">
            <h2>Let’s see <span style={{color: color.color}}>what</span> we’ve been<br/>working on</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere <br/>
            diam amet lacus in. Sed nibh eget lacinia nunc.
            </p>
            <div className="button__group mt-4">
                <a href='/' className='me-3 me-sm-4 px-3 py-2 text-white button text-decoration-none'>Website</a>
                <a href='/' className='me-3 me-sm-4 ad__btn px-3 py-2 button text-decoration-none'>UI/UX</a>
                <a href='/' className='me-sm-4 ad__btn px-3 py-2 button text-decoration-none'>PWA's</a>
            </div>
            <div className="stack mt-5">
                <Row style={{position: 'relative'}} xs={1} md={2} className='gy-5 gy-md-auto justify-content-between align-items-start'>
                    <Col className=''>
                        <div className="stack__cont stack__cont__spec bg-light shadow-lg">
                            <img src={Snap} alt="img.jpg" className='stack__img w-100' />
                            <div className='p-4'>
                                <h2 className='me-4 mb-0 w-100'>SanpChat Clone</h2>
                                <small className='text-secondary w-100'>View Project</small>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="stack__cont stack__cont__spec-1 bg-light shadow-lg">
                            <img src={Wave} alt="img.jpg" className='stack__img w-100' />
                            <div className='p-4'>
                                <h2 className='me-4 mb-0 w-100'>Drumlotion Production</h2>
                                <small className='text-secondary w-100'>View Project</small>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="stack__cont .stack__cont__spec-2 bg-light shadow-lg">
                            <img src={Rectangle3} alt="img.jpg" className='stack__img w-100' />
                            <div className='p-4'>
                                <h2 className='me-4 mb-0 w-100'>Pagoda Partners</h2>
                                <small className='text-secondary w-100'>View Project</small>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="stack__cont bg-light shadow-lg">
                            <img src={Rectangle4} alt="img.jpg" className='stack__img w-100' />
                            <div className='p-4'>
                                <h2 className='me-4 mb-0 w-100'>E-learning App</h2>
                                <small className='text-secondary w-100'>View Project</small>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='text-center mt-5'>
                <Button text='More' />
            </div>
            <div className="what text-center mt-5">
                <h1>We can’t wait to work<br/>with <span style={{color: color.color}}>You</span></h1>
                <div className='text-center mt-4 mt-md-5'>
                    <Button text='Lets connect' />
                </div>
            </div>
       </div>
    </Container>
  )
}

export default Work