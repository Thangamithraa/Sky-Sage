import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from './assets/SkySage_logo_light.png'; // Import your logo
import './styles/Login.css';

const Forget = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (Object.keys(errors).length === 0) {
      alert(`Password reset link sent to ${email}`);
    } else {
      setErrors(errors);
    }
  };

  return (
    <section className="login-section">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-box">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="form-value">
            <h2>Reset Password</h2>
            <div className="inputbox">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label><br></br>Email</label>
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
              <button id='form-button' type="submit">Submit</button>
            <div className="register">
              <p>
                Remember your password? <Link to="/">Log in</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Forget;
