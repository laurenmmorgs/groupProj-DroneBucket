import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: '',
    password: ''
  });

  const changeHandler = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/login', userLogin, { withCredentials: true })
      .then((res) => {
        console.log(res);
        navigate('/display'); // Update the route accordingly
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={loginHandler} className="col-4 mx-auto user-form">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={userLogin.email}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={userLogin.password}
            onChange={changeHandler}
          />
        </div>
        <button type="submit" className="btn btn-dark mt-3">
          Login
        </button>
        <br />
        <Link to="/register">Don't have an account? Click here to sign up</Link>
      </form>
    </div>
  );
};

export default Login;
