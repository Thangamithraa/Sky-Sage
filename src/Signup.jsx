import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/SkySage_logo_light.png'; // Import your logo
import './styles/Login.css';
import axios from 'axios';
const Signup = ({ handleSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password.trim() || password.trim().length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length === 0) {
      handleSignIn(email, password);
      alert(`Signup Successful!\nEmail: ${email}`);
      window.location.href = '/';
    } else {
      setErrors(errors);
    }

    axios.post('https://skysageserver.onrender.com/adduser',{
      userName:email,
      password:password
    })
    .then((res)=>{
      console.log(res.data)
    })


  };

  return (
    <section className="login-section">
      <div className="gif-container">
    
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-box">
          
          <div className="form-value">
            <h2>Signup</h2>
            <div className="inputbox">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="inputbox">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>
            <div className="inputbox">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <label>Confirm Password</label>
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
            </div>
            <br />
            <div>
              <button id='form-button' type="submit">Sign up</button>
            </div>
            <br />
            <div className="register">
              <p>
                Already have an account? <Link to="/">Log in</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
