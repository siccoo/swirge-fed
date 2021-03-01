import React from 'react';
import "./Form.css";

import SuccessImg from "./../images/success-img.svg";

const Success = () => {
    return (
        <div>
            <div className='form-content-right'>
                <h1 className='form-success'>We have received your request!</h1>
                <img className='form-img-2' src={SuccessImg} alt='success-img' />
            </div>
        </div>
    )
}

export default Success;
