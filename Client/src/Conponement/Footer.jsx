import React from 'react'
import { useNavigate } from 'react-router-dom';
import home from "../assets/home.png";
import sicon from "../assets/sicon.png";
import pot from "../assets/pot.png";
import dolla from "../assets/dolla.png";
import contact from "../assets/contact.png";
import { SiHomebridge } from "react-icons/si";
import { BsSave2 } from "react-icons/bs";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


const footer = () => {
  return (
    <div>
        <div className=" mx-3 px-3 text-center shadow-sm footer fixed-bottom ">
        <div className="no-padding mt-2">
         <div className=" ">
         <NavLink to="/Dashboard" style={{color: "black", textDecoration: "none"}}>
           <SiHomebridge />
           <p>Home</p>
         </NavLink>
            </div>

         <div className="">
            <NavLink to="/Saveme" style={{color: "black", textDecoration: "none"}}>
            <BsSave2 />
            <p>Save</p>
            </NavLink>
          </div>

         <div className="">
         <NavLink to="/Loan" style={{color: "black", textDecoration: "none"}}>
          <LuCircleDollarSign />
          <p>Loan</p>
          </NavLink>
          </div>

         <div className="">
            <NavLink to="/Reward" style={{color: "black", textDecoration: "none"}}>
         <IoDiamond />
          <p>Rewards</p>
          </NavLink>
          </div>

        <div className="">
            <NavLink to="/Account" style={{color: "black", textDecoration: "none"}}>
         <FaUser />
          <p>Account</p>
          </NavLink>
          </div>
          </div>

       </div>
    </div>
  )
}

export default footer