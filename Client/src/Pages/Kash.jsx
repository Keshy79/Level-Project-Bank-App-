import React from 'react'
import Group from "../assets/Group.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Kash = () => {
    const navigate = useNavigate();
  return (
   <div>
     <div onClick={()=>{navigate('/Landing')}} style={{ marginTop:"50vh", cursor: "pointer"}} className='kashDiv d-flex align-items-center justify-content-center' >
        <img src={Group} alt="" />
        <h1 className='ms-2'>KASH BANK</h1>
    </div>
   </div>
  )
}

export default Kash