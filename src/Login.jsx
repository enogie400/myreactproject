import SocialLogin from "./components/SocialLogin";
import InputField from "./components/InputField";
import './index.css';
import { Link } from "react-router-dom";
const Login = () => {
return(
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
      <SocialLogin />

      <p className="separator"><span>or</span></p>

      <form action="#" className="login-form">
        <InputField type="email" placeholder="Email address" icon="mail" />
        <InputField type="password" placeholder="Password" icon="lock" />

        <a href="#" className="forgot-password-link">Forgot password?</a>
        <button type="submit" className="login-button">Log In</button>
      </form>

      <p className="signup-prompt">
        Don&apos;t have an account? <Link to="#" className="signup-link">Sign up</Link>
      </p>
    </div>
  )

}


export default Login;