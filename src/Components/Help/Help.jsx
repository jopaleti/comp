import React from 'react';
import './style.scss';
import {Container} from 'react-bootstrap';
import Button from '../Button/Button';
import { ArrowRight } from 'react-bootstrap-icons';
import { Saly, Vector } from '../../Assets';

function Help({color}) {
  return (
    <Container>
        <div className="help__container text-center mt-5">
            <h2 className='mb-3'>We Help People To<br/>Shine <span style={{color: color ? color.color : '#000000'}}>Online</span></h2>
            <small>We are here to help <span style={{color: color ? color.color : '#000000'}}>You</span> and <span style={{color: color ? color.color : '#000000'}}>YOUR</span> business to grow and shine online.</small>
            <div className="d-flex align-items-center justify-content-center mt-4 gap-3 text-center button__group">
                <Button />
                <span>Lets  connect <ArrowRight size={20} /></span>
            </div>
            <div className="help__image" style={{backgroundImage: `url(${Saly})`}}>
                {/* <img src={Saly} alt="" className="w-100 h-100" /> */}
                <div className="vector__img">
                    <img src={Vector} alt="img.png" className='w-100 h-100' />
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Help