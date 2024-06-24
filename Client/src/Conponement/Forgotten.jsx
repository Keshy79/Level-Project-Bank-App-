import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Forgotten = () => {
  const navigate = useNavigate();

  const Signup = () => {
    navigate("/Login");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
  onSubmit: (values) =>{
    const url = "http://localhost:5000/client/reset_password";
    console.log(values);
    axios.post(url, values)
    .then((res)=>{
      console.log(res);
      toast.success("Password change successfully!!");
      setTimeout(() => {
        navigate('/login')
      }, 3000);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  });

  return (
    <div className="forget mx-auto mt-5">
      <h1 style={{ color: "#2bdc2b" }}>Forgot password?</h1>
      <p>Please enter your email to recover your password.</p>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="password" className="fw-bolder fst-italic mt-5">
          Email
        </label>

        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          id="email"
          className="input w-100 "
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <p>{}</p>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default Forgotten;
