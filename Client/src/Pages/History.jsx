import React from 'react'
import Footer from '../Conponement/Footer'
import { FaArrowLeftLong } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const History = () => {
  return (
    <div>
        <NavLink to={"/Dashboard"} style={{textDecoration:'none', color:'black'}}>
        <div className='d-flex align-items-center p-4' style={{backgroundColor:'#2bdc2b'}}>
        <FaArrowLeftLong  className='me-5  '/>
            <h3 className='mx-4'>Transaction History</h3>
        </div>
        </NavLink>

        <button className='btn m-5 p-3 ' style={{backgroundColor:'#2bdc7b'}}>Request statement</button>

        <div className=' d-flex justify-content-between align-items-center m-4 '>
            <button className='btn' style={{backgroundColor:'#2bdc2b'}}>All</button>
            <button className='btn' style={{backgroundColor:'#2bdc3b'}}>Successful</button>
            <button className='btn' style={{backgroundColor:'#2bdc5b'}}>Pending</button>
            <button className='btn' style={{backgroundColor:'#2bdc7b'}}>Failed</button>
        </div>




        <Footer/>
    </div>
  )
}

export default History