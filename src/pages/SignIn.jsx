import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if(userCredential.user){
        navigate('/')
      }
    
    

    } catch (error) {
      toast.error('Bad User Credentials');
    }
  };


  return (
    <>
      <div className="pageContainer">
        <p className="pageHeader"> Welcome Back!</p>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={onChange}
            id="email"
            className="emailInput"
          />
          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Password"
              onChange={onChange}
              id="password"
              className="passwordInput"
            />
            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password
          </Link>
          <div className="signInBar">
            <p className="signInText">Sign In</p>
            <button className="signInButton">
              <ArrowRightIcon fill="#ffffff" width="36px" height="34px" />
            </button>
          </div>
        </form>

        <Link to='/sign-up'className="registerLink"> 
          Sign Up Instead
          </Link>
      </div>
    </>
  );
}

export default SignIn;
