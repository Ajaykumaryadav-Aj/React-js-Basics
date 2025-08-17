import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const naviagate = useNavigate();
  function handleClick() {
    naviagate("/");
  }
  return (
    <div>
     DashBoard
             <Outlet/>

      <button onClick={handleClick}>Move to Home page </button>
    </div>
  );
};

export default Dashboard;
