import React from 'react'

const Register = () => {
    return (
        <div className="form-content-right">
            <form className="form">
                <h1>Register your account by filling your information below</h1>
                <div className="form-inputs">
                    <label htmlFor="fullname" className="form-label">
                        Full Name
                    </label>
                    <input 
                        type="text" 
                        name="fullname" 
                        className="form-input" 
                        placeholder="Enter your full name" 
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input 
                        type="email" 
                        name="fullname" 
                        className="form-input" 
                        placeholder="Enter your email" 
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="fullname" className="form-label">
                        Password
                    </label>
                    <input 
                        type="password" 
                        name="fullname" 
                        className="form-input" 
                        placeholder="Enter your password" 
                    />
                </div>
            </form>
        </div>
    )
}

export default Register
