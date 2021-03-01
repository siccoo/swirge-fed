import React from 'react'

const Register = () => {
    return (
        <div className="form-content-right">
            <form className="form">
                <h1>Register your account by filling your information below</h1>
                <div className="form-inputs">
                    <label htmlFor="fullname" className="form-label">
                        <input type="text" name="fullname" className="form-input" />
                    </label>
                </div>
            </form>
        </div>
    )
}

export default Register
