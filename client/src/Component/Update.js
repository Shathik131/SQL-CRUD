import React from "react";

const Update = () => {
  return (
    <div className=" d-flex justify-content-center align-item-center ">
      <form className="w-25 border border-2 justify-content-center bg-danger align-item-center mt-5 p-4 rounded-5">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="User-Name"
            aria-describedby="emailHelp"
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
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            PhoneNumber
          </label>
          <input
            type="Number"
            className="form-control"
            placeholder="PhoneNumber"
          />
        </div>

        <div className="d-flex justify-content-center align-item-center mt-3">
          <button type="submit" className="btn btn-primary">
            SignUp
          </button>
          <button type="submit" className="btn btn-primary mx-2">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
