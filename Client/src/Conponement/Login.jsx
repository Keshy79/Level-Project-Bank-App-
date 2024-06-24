import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import login from "../assets/Login.gif";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("http://localhost:5000/client/loginUser", values)
        .then((res) => {
          console.log(res);
          toast.success("Login Successfully");
          navigate("/dashboard");
          let token = res.data.token;
          localStorage.setItem("token", token);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Login Failed");
        });
    },
  });
  return (
    <div>
      <div className=" w-100">
        <div className="imgDiv d-flex flex-column mt-lg-3 flex-lg-row justify-content-center ">
          <div className=" mx-auto ">
            <img src={login} alt="" />
          </div>
          <div className=" mx-auto py-5 w-100 ">
            <form action="" className="form mx-auto" onSubmit={formik.handleSubmit}>
              <h1 className="title fw-bolder fst-italic text-center" style={{color: "#2bdc2b"}}>LOGIN</h1>
              <h3 className="message fw-bolder fst-italic text-center">
                Welcome to Login page.
              </h3>
              <div>
                <label htmlFor="email" className="fw-bolder fst-italic">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="input w-100 "
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
              <div>
                <label htmlFor="password" className="fw-bolder fst-italic">
                  Password
                </label>
                <input
                  type="password"
                  className="input w-100"
                  name="password"
                  id="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <p className="mt-2">Have you forgotten your password?, <NavLink to="/Forgotten" style={{textDecoration: "none"}}>click here to recover it</NavLink></p>
              </div>
              <button className="submit mx-auto d-block mt-4" type="submit">
                LOG IN
              </button>
              <p className="signin fw-bolder fst-italic text-center mt-3 ">
                Do you not have a KashBank account?
                <NavLink to="/signup" style={{textDecoration: "none"}}>Signup here</NavLink>
                {/* Do you not have a BankMe account?{" "}
        <a href="#" onClick={Signup}>
        Sign up here
        </a> */}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
