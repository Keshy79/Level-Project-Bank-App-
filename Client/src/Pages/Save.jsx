import React from 'react'
import Saveme from "../assets/Saveme.gif";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Save = () => {
    const navigate = useNavigate();
  return (
    <div className='text-center p-2'>
        <h4 onClick={()=>{navigate('/Login')}} className=' float-end' style= {{cursor: "pointer"}}>Skip</h4>
        <img className='img-fluid'style={{height: "75vh"}} src={Saveme} alt="" />
        <h1>Save money</h1>

        <p>We help you meet your savings target monthly and our emergency plans enable you save for multiple purposes</p>
        
       <div className='d-flex justify-content-between  '>
       <div className='d-flex '>
            <div style={{background:'#2BDC2B', height:'20px', width: '20px', borderRadius: "100%", cursor: "pointer"}}></div>
            <div onClick={()=>{navigate('/Withdraw')}} style={{background:'#e0e0e0', height:'20px', width: '20px', borderRadius: "100%", margin:'0 15px', cursor: "pointer"}}></div>
            <div onClick={()=>{navigate('/invest')}} style={{background:'#e0e0e0', height:'20px', width: '20px', borderRadius: "100%", cursor: "pointer"}}></div>
        </div>

        <button onClick={()=>{navigate('/Withdraw')}} style={{border: "none", padding: "10px", backgroundColor: "#2bdc2b"}}>NEXT</button>
        </div>
    </div>
  )
}

export default Save