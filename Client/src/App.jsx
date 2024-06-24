import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Conponement/Login";
import Signup from "./Conponement/Signup";
import Forgotten from "./Conponement/Forgotten";
import Dashboard from "./Conponement/Dashboard";
import Fetch from "./Pages/Fetch";
import Kash from "./Pages/Kash";
import Invest from "./Pages/Invest";
import Save from "./Pages/Save";
import Welcome from "./Pages/Welcome";
import Withdraw from "./Pages/Withdraw";
import Footer from "./Conponement/Footer";
import Saveme from "./Pages/Saveme";
import Account from "./Pages/Account";
import Reward from "./Pages/Reward";
import Loan from "./Pages/Loan";
import History from "./Pages/History";
import Landing from "./Conponement/Landing";
import { Toaster } from "react-hot-toast";
import Fundacct from "./Pages/Fundacct";
import Verify from "./Pages/Verify";


const App = () => {
  const token = localStorage.getItem("token");

  return (
    <div>
      <Toaster position= 'top-center' reverseOrder={false} />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/" element={<Kash />} />
        <Route path="/Invest" element={<Invest />} />
        <Route path="/Save" element={<Save />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Reward" element={<Reward />} />
        <Route path="/Saveme" element={<Saveme />} />
        <Route path="/Loan" element={<Loan />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/History" element={<History />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Withdraw" element={<Withdraw />} />
        <Route path="/Forgotten" element={<Forgotten />} />
        <Route path="/dashboard/fund-acct" element={token ? <Fundacct/> : <Navigate to="/login" />} />
        <Route path="/Dashboard" element={token ? <Dashboard/> : <Navigate to="/login" />} />
        {/* <Route path="/" element={<Fetch />} /> */}
      </Routes>
    </div>
  )
}

export default App;