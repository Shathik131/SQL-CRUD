import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = { userName, password };

    try {
      await axios.post("http://localhost:5000/signin", data);
      console.log("Authentication successful");
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <form className=" d-flex justify-content-center align-items-center flex-column border border-3 p-4 bg-danger rounded-5">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="User Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary mx-3"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSignUp}
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
