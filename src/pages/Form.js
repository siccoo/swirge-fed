import React, { useState } from 'react';
import Register from "./Register";
import Success from "./Success";

import Swirge from "./../images/swirge-logo.png";

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div>
            <div className='form-container'>
                <span className='close-btn'>×</span>
                <div className='form-content-left'>
                    <img className='form-img' src={Swirge} alt='swirge-logo' />
                </div>
                {!isSubmitted ? (
                <Register submitForm={submitForm} />
                ) : (
                <Success />
                )}
            </div>
        </div>
    )
}

export default Form
