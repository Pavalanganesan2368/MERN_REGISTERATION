import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
  const [formData, setFormData] = useState({
		name : "",
		email : "",
		password : ""
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData,  [name] : value });
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"https://mern-registeration-wwwj.onrender.com/api/auth/register",
				formData
			);

			localStorage.setItem("token", response.data.token);
			toast.success("Registered Successfully.");
			navigate("/login");
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};

  return (
    <form onSubmit={handleSubmit} className='form-container'>
			<h2 className="register-heading">REGISTER</h2>
			<input type="text" name="name" placeholder='Enter Your Name...' onChange={handleChange}/>
			<input type="email" name="email" placeholder='Enter Your Email...' onChange={handleChange}/>
			<input type="password" name="password" placeholder='Enter Your Password...' onChange={handleChange}/>
			<button type='submit'>Sign Up</button>
		</form>
  )
}

export default Register
