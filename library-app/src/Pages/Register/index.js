import React from 'react'
import Auth from '../../Layout/Auth';
import '../../Style/Layout/layout.css';
import Logo from '../../assets/lily.png'
import { Link } from 'react-router-dom';

const Register = () => {
  return <Auth>
        <div className="img-login">
      <img src={Logo} alt="logo" srcset="" />
      <div className="text-center text-login-logo">Lily</div>
    </div>
    <div className="container form-login">
      <div className="row">
        <div className="col-md-9 col-lg-8 mx-auto">
          <h3 className="login-heading mb-4">Register</h3>
          <p className='login-heading'>Welcome Back, Please login to your account</p>
          
            <form className="registerForm" name="loginForm" action="./index.html">
              <div className="box-form">

                <div className="form-floating mb-2">
                  <input type="text" className="form-control input" id="email" placeholder="niki@mail.com" name="email" />
                  <label for="email" className="label">Username</label>
                  <span className="error-message"></span>
                </div>

                <div className="form-floating mb-2">
                  <input type="text" className="form-control input" id="email" placeholder="niki@mail.com" name="email" />
                  <label for="email" className="label">Full Name</label>
                  <span className="error-message"></span>
                </div>

                <div className="form-floating mb-2">
                  <input type="email" className="form-control input" id="email" placeholder="niki@mail.com" name="email" />
                  <label for="email" className="label">Email address</label>
                  <span className="error-message"></span>
                </div>

                <div className="form-floating password mb-2">
                  <input type="password" className="form-control passsword" id="password" placeholder="Password" name="password" />
                  <label for="password" className="label">Password</label>
                  <span className="error-message"></span>
                </div>
              
              </div>
          
              <div className="form-check mb-2 d-flex justify-content-between">
                <div className="remember">

                  <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                  <label className="form-check-label" for="rememberPasswordCheck">Remember Me</label>

                </div>

                <div className="text-center">
                  <a className="small" href="#">Forgot password?</a>
                </div>

              </div>
          
              <div className="btn-login">
                <button className="btn button" type="submit" onclick="validate()" value="Enter">Sign Up</button>
                <Link to='/login' className="btn" href="./register.html" role="button">Login</Link>
              </div>
          
            </form>
      <div className="terms-login fixed-bottom">
        <div className="agree">By signing up, you agree to Book's</div>
        <div className="terms-text">Terms and Conditions <span>&</span> Privacy Policy</div>
      </div>
        </div>
      </div>
    </div>
  </Auth>
}

export default Register