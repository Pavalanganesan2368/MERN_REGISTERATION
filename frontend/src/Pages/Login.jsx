import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const [formData, setFormData] = useState({
		email : "",
		password : ""
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [name] : value });
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				'http://localhost:5000/api/auth/login',
				formData
			);

			localStorage.setItem("token", response.data.token);
			toast.success("Login Successfully");
			navigate("/dashboard");
		} catch (error) {
			toast.error(error.response.data.message);
		}
	}

  return (
    		<form onSubmit={handleSubmit} className='login-container'>
			<h2 className='login-heading'>LOGIN</h2>
			<input type="email" placeholder='Enter Your Email...' name='email' onChange={handleChange}/>
			<input type="password" placeholder='Enter Your Password...' name='password' onChange={handleChange}/>
			<button type='submit'>Sign In</button>
		</form>
  )
}

export default Login;