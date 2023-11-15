import React from 'react';
import './NotFound.css'
import erroImage from '../../images/404-error.jpg'

const NotFound = () => {
    return (
        <div className='not-found'>
            <img src={erroImage} alt="" />
        </div>
    );
};

export default NotFound;