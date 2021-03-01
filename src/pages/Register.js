import React from 'react';
import useForm from "../useForm";
import validate from "../validation";



const Register = ({ submitForm }) => {

    const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate);

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit} noValidate>
                <h1>Register your account below</h1>
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
                    {errors.fullname && <p>{errors.fullname}</p>}
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
                    {errors.email && <p>{errors.email}</p>}
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
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button 
                    type="submit" 
                    className="form-input-btn"
                >Sign up</button>
                <span className='form-input-login'>
                    Already have an account? Login <a href='/'>here</a>
                </span>
            </form>
        </div>
    )
}

export default Register;
