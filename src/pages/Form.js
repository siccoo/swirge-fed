import React, { useState } from 'react';
import Register from "./Register"

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div>
            <Register />
        </div>
    )
}

export default Form
