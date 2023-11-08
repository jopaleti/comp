import React from 'react';
import { Footer, Navbar } from '../../Components';
import './style.scss';
import {Container, Row, Col} from 'react-bootstrap';
import { final } from '../../Assets';

const color = {
    color: '#6155A6',
}
function Contact() {
  return (
    <div className='contact'>
        <div className="navbar">
            <Navbar />
        </div>
       <Container>
            <div className="contact__container mt-5">
                    <Row xs={1} md={2}>
                        <Col>
                            <div className="contact__header__text">
                                <h1>Let’s Get Connected</h1>
                                <p>Let’s get Connected and  Make that <span style={{color: color.color}}>Dream <br/>Project</span> of <span style={{color: color.color}}>Your’s</span></p>
                            </div>
                            <div className="mt-4 form__container">
                                <form action="/">
                                    <input required type="text" placeholder='Name' className='mt-2 mt-sm-5'/>
                                    <input required type="email" placeholder='Email' className='mt-5' />
                                    <textarea required name="message" id='textarea' rows={1} className='mt-5' >Message</textarea>
                                    <button type='btn' className='px-4 py-2 rounded-pill text-white mt-4 submit__btn'>Send</button>
                                </form>
                            </div>
                        </Col>
                        <Col>
                            <div className="contact__img">
                                <img src={final} alt="img.jpg" className='w-100 h-100'/>
                            </div>
                        </Col>
                    </Row>
                </div>
       </Container>
       <div className="footer bg-light">
           <Footer />
       </div>
    </div>
  )
}

export default Contact