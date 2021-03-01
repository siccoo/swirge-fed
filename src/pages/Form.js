import React, { useState } from 'react';
import Register from "./Register";
import Success from "./Success";

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div>
            {!isSubmitted ? (
                <Register submitForm={submitForm} />
                ) : (
                <Success />
            )}
        </div>
    )
}

export default Form
