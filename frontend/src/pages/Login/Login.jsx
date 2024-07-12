import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [signInSuccess, setSignInSuccess] = useState(false);
  const [loggedInSuccess, setLoggedInSuccess] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Sign up logic here
      console.log("Sign up:", { name, email, password });
      // Call API to create new user
      //...
      alert("Signed up successfully!");
    } else {
      // Sign in logic here
      console.log("Sign in:", { email, password });
      // Call API to authenticate user
      //...
      if (signInSuccess) {
        alert("Logged in successfully!");
        setLoggedInSuccess(true);
      } else {
        alert("Signed in successfully!");
        setSignInSuccess(true);
      }
    }
  };

  return (
    <div className="login-wrap">
      <div className="login-html">
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            {!isSignUp? (
              <React.Fragment>
                <div className="group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="group">
                  <input type="submit" value="Sign In" />
                </div>
                <div className="group">
                  <p>
                    Not registered?{" "}
                    <a href="#" onClick={handleSignUpClick}>
                      Register here
                    </a>
                  </p>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div className="group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="group">
                  <input type="submit" value="Sign Up" />
                </div>
                <div className="group">
                  <p>
                    Already registered?{" "}
                    <a href="#" onClick={handleSignInClick}>
                      Sign in here
                    </a>
                  </p>
                </div>
              </React.Fragment>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;