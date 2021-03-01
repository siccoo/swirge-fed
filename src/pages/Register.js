import React from 'react';
import useForm from "../useForm";

const Register = () => {

    const { handleChange, values } = useForm();

    return (
        <div className="form-content-right">
            <form className="form">
                <h1>Register your account by filling your information below</h1>
                <div className="form-inputs">
                    <label htmlFor="fullname" className="form-label">
                        Full Name
                    </label>
                    <input 
                        id="fullname"
                        type="text" 
                        name="fullname" 
                        className="form-input" 
                        placeholder="Enter your full name"
                        value={values.fullname}
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        id="email" 
                        type="email" 
                        name="email" 
                        className="form-input" 
                        placeholder="Enter your email" 
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input 
                        id="password"
                        type="password" 
                        name="password" 
                        className="form-input" 
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange} 
                    />
                </div>
                <button 
                    type="submit" 
                    className="form-input-btn"
                >Sign up</button>
                <span className='form-input-login'>
                    Already have an account? Login <a href='#'>here</a>
                </span>
            </form>
        </div>
    )
}

export default Register;
