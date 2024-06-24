import React from 'react'
import welcome from "../assets/welcome.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Welcome = () => {
    const navigate = useNavigate();

  return (
    <div className='text-center'>
        <img className='img-fluid 'style={{height: "75vh"}} src={welcome} alt="" />
        <div className='text-center  ' style={{marginTop:"0vh"}}>
        <div className=''>
        <h1 >Welcome to KashBank</h1>
        <p>The bank for everyone.</p>
        </div>

        <div className='mt-3'>
            <button onClick={()=>{navigate('/Signup')}} className='w-100 p-2 mt-5 mb-3' style={{backgroundColor: "#2BDC2B", border: "none", color: "white" }}>create your free account</button>
            <button onClick={()=>{navigate('/Login')}} style={{borderRadius: "5px", border: "1px solid #2BDC2B", backgroundColor: "white"}} className='w-100 p-2'>log into your account</button>
        </div>
    </div>
    </div>
  )
}

export default Welcome