import React from "react";
import Navbar from "../components/dashboard/navbar";
import Body from "../components/dashboard/body";
import "../css/dashboard.css"
function Dashboard() {
    return (
      <>
        <div className="main px-8">
            <Navbar />
            <Body />
        </div>
      </>
    );
  }

export default Dashboard;