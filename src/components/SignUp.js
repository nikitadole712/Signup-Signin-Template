import React, { useState } from 'react';
import './SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true); // State to track if it's signup or signin
  const [name, setName] = useState('')
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    }
  

  return (
    <div>
      <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
        <div className="sign-up-container">
          <form onSubmit={handleFormSubmit}>
            <h1>Create Account</h1>
            <div className="social-links">
              <div>
                <a href="https://www.facebook.com/">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </div>
              <div>
                <a href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
              </div>
              <div>
                <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
            </div>
            <input
              type="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="form_btn">Sign Up</button>
          </form>
        </div>
        <div className="sign-in-container">
          <form onSubmit={handleFormSubmit}>
            <h1>Sign In</h1>
            <div className="social-links">
              <div>
                <a href="https://www.facebook.com/">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </div>
              <div>
                <a href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
              </div>
              <div>
                <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="form_btn">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-left">
              <h1>Welcome Back</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="overlay_btn" id="signIn" onClick={() => setIsSignUp(false)}>Sign In</button>
            </div>
            <div className="overlay-right">
              <h1>Hello, Friend</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="overlay_btn" id="signUp" onClick={() => setIsSignUp(true)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
