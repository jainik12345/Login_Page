import "./Login_Signup.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const Login_Signup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Enter Your Name"/>
        </div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Enter Your Email ID" />
        </div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Enter Your Password"/>
        </div>
      </div>
      <div className="forgot-password">Lost Password ? <span>Click Here</span></div>
      <div className="submit-container">
        <div className="submit">Sign UP</div>
        <div className="submit">Login</div>
      </div>
    </div>
  );
};

export default Login_Signup;
