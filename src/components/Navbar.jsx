import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState,useEffect } from "react";

async function getUser(token) {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    const user = res.data;
    return { user };
  } catch (error) {
    return { error };
  }
}

function CheckLogin() {
  const [checkLogin, setCheckLogin] = useState(false);
  useEffect(() => {
    async function getToken() {
      const token = await sessionStorage.getItem("access-token");
      if (token) {
        try {
          const { user, error } = await getUser(token);
          if(error) throw new Error(error)
          setCheckLogin(true);
          return {token}
          
        } catch (error) {
            return {error}
        }
      }
      return {token}
    }
    getToken();
  });
  return {
    checkLogin,
  };
}


const Navbar =  () => {
  const state = useSelector((state) => state.handleCart);
  const {token} = CheckLogin();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/home">
          STORYLINE
        </NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/home"
                style={({ isActive }) => ({
                  color: isActive ? "black  " : "#52525b",
                })}
              >
                Home{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/product"
                style={({ isActive }) => ({
                  color: isActive ? "black " : "#52525b",
                })}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? "black " : "#52525b",
                })}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive ? "black " : "#52525b",
                })}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons text-center">
            <NavLink to="/login" className="btn btn-outline-dark m-2">
              <i className="fa fa-sign-in-alt mr-1"></i> Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-dark m-2">
              <i className="fa fa-user-plus mr-1"></i> Register
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark m-2">
              <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}){" "}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
