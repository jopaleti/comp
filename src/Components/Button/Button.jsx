import React from 'react';
import './style.scss';

function Button({text}) {
  return (
    <div>
        <a href='/' className='px-3 py-2 text-white button text-decoration-none'>{text ? text : 'See How'}</a>
    </div>
  )
}

export default Button