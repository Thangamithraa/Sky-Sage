import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
 // Import your logo
import './styles/Login.css';
import axios from 'axios';
import LoadingComponent from './LoadingComponent';
import { MdLocalGasStation } from 'react-icons/md';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   const storedEmail = localStorage.getItem('userEmail') || '';
  //   const storedPassword = localStorage.getItem('userPassword') || '';
  //   setEmail(storedEmail);
  //   setPassword(storedPassword);
  // }, []);

  useEffect(() => {
    localStorage.setItem('userEmail', email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem('userPassword', password);
  }, [password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!password.trim() || password.trim().length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }



    axios.get(`https://skysageserver.onrender.com/${email}`).then((res) => {
      if(res.data.length===0){
        alert("User Not Found !")
      }
      else if(password===res.data[0].password){
        window.location.reload()
        localStorage.setItem("currentUser",email)
      }
      else{
          alert("Wrong Password")
      }
    })

  };

  return (
    <section className="login-section">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-box">
          <div className="form-value">
           
            <h2>Login</h2>
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
            <div>
              <label className="remember-me">
                <div>
                  <input type="checkbox" /> Remember Me
                </div>
                <Link to="/Forget">Forgot Password ?</Link>
              </label>
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button id='form-button' type="submit">Log in</button>
            </div>
            <br />
            <div className="register">
              <p>
                Don't have an account? <Link to="/Signup">Register</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
