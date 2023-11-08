import React from 'react';
import './style.scss';
import {Container} from 'react-bootstrap'
import Button from '../Button/Button';

function Great({color}) {
  return (
    <Container>
        <div className="service__header mt-5">
            <h1>A Great user experience <br/>is <span style={{color: color.color}}>Our Priority</span></h1>
            <p className='mt-3'>We create user experience with accessibility in mind.<br/>We are here to give modern solutions to the modern problems.</p>
            <div className="mt-4">
            <Button text='Our Work'/>
            </div>
        </div>
    </Container>
  )
}

export default Great