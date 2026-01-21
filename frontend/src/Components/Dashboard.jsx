import React from 'react';
import { useNavigate } from "react-router-dom"; 

const Dashboard = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/");
	}

  return (
    <div className='main-container'>
        <h1 className='main-heading'>Successfully Register Your Account.</h1>
				<button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard