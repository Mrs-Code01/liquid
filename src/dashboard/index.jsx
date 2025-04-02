import React from "react";
import Navbar from "../components/dashboard/navbar";
import Body from "../components/dashboard/body";
import "../css/dashboard.css"
function Dashboard() {
    return (
      <>
        <section style={{ backgroundColor: 'oklch(21% 0.034 264.665)' }}>
            <div className="main px-8">
                <Navbar />
                <Body />
            </div>
        </section>
      </>
    );
  }

export default Dashboard;