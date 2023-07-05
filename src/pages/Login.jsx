import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Call login
async function loginApi(email, password) {
  try {

    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      {
        email: email,
        password: password,
      }
    );
    const login = res.data;
    return { login };
  } catch (error) {
    return { error };
  }
}
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function submit(e) {
    e.preventDefault();
    // e.preventDefault()
    if (!email || email == "") {
      toast.error("Wow! You forget to enter email address");
    }

    if (!password || password == "") {
      toast.error("Wow! You forget to enter password.");
    }

    try {
      const { login, error } = await loginApi(email, password);
      if (error) throw new Error(error);
      sessionStorage.setItem("access-token",login.accessToken);
      window.location.reload(false);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <>
      <Navbar />
      <div className="container my-3 py-5 ">
        <h4 className="text-center">Login</h4>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="my-3">
                <label htmlFor="display-4">Email address</label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </div>
              <div className="my-3">
                <label htmlFor="floatingPassword display-4">Password</label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>
                  New Here?{" "}
                  <Link
                    to="/register"
                    className="text-decoration-underline text-info"
                  >
                    Register
                  </Link>{" "}
                </p>
              </div>
              <div className="">
                <button
                  onClick={(e) => {
                    submit(e);
                  }}
                  className="my-2 mx-auto btn btn-dark"
                  // type="submit"
                  // disabled
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Login;
