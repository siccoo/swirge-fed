import React from 'react';
import "./Form.css";

const Success = () => {
    return (
        <div>
            <div className='form-content-right'>
                <h1 className='form-success'>We have received your request!</h1>
                <img className='form-img-2' src="../images/success-img.svg" alt='success-img' />
            </div>
        </div>
    )
}

export default Success;
