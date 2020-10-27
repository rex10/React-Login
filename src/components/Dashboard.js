import React from 'react';
import InputSection from './InputSection';
import NotesSection from './NotesSection'
import { removeUserSession } from  '../Utils/Common'
function Dashboard() {

  // handle click event of logout button
  const handleLogout = () => {
    const {props} = this
    removeUserSession();
    props.history.push("/login");
  }
  return (
    <div className="container">
        <h1>G Notes</h1>
        <InputSection />
        <div className="line"></div>
        <NotesSection />
        <div><button className="btnLogout" onClick={handleLogout} >Logout</button></div>
      </div>
  )
}


export default Dashboard;
