import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';

const Navbar = () => {
	const token = localStorage.getItem("token");
	return (
		<nav>
			<div className='dashboard-container'>
				<h1 className='dashboard-heading'>MERN AUTH</h1>
				{token ? (
					<>
						<Link to={"/dashboard"}>Dashboard</Link>
						<Dashboard />
					</>
				) : (
						<div className='login-register-container'>
							<Link to="/login" className='login-link'>Login</Link>
							<Link to="/register" className='register-link'>Register</Link>
						</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar