import React from 'react'
import draw from "../assets/draw.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const Withdraw = () => {
    const navigate = useNavigate();

    const Invest = () => {
      navigate("/invest");
    }
  return (
    <div>
       <div className='text-center p-2'>
       <h4 onClick={()=>{navigate('/Login')}} style= {{cursor: "pointer"}} className=' float-end '>Skip</h4>
        <img className='img-fluid' style={{height: "73vh"}} src={draw} alt="" />

        <h1>Withdraw your money</h1>
        <p>With just your phone number, you can withdraw your funds at any point in time from any BankMe agent close to you.</p>

        <div className='d-flex justify-content-between  '>
       <div className='d-flex '>
            <div onClick={()=>{navigate('/save')}} style={{background:'#e0e0e0', height:'20px', width: '20px', borderRadius: "100%", cursor: "pointer"}}></div>
            <div onClick={()=>{navigate('/Withdraw')}} style={{background:'#2BDC2B', height:'20px', width: '20px', borderRadius: "100%", margin:'0 15px', cursor: "pointer"}}></div>
            <div onClick={()=>{navigate('/invest')}} style={{background:'#e0e0e0', height:'20px', width: '20px', borderRadius: "100%", cursor: "pointer"}}></div>
        </div>

        <button onClick={Invest} style={{border: "none", padding: "10px", backgroundColor: "#2bdc2b"}}>NEXT</button>
        </div>
       </div>
    </div>
  )
}

export default Withdraw