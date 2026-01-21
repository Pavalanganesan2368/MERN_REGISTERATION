const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

exports.registerUser = async (request, response) => {
     try {
          let { name, email, password } = request.body;
          password = password.toString();
          
          const userExists = await User.findOne({ email });
          if (userExists) return response.status(400).json({ message : "User is Already Exists." });

          if (!name || !email || !password) return response.status(400).json({ message : "All fields must Required" });

          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);

          const user = await User.create({
               name,
               email, 
               password : hashedPassword
          });

          const token = jwt.sign(
               { id : user._id },
               process.env.JWT_SECRET,
               { expiresIn : "1d" }
          );

          response.status(201).json({ 
               message : "User Registered Successfully",
               token
          });
     } catch (error) {
          response.status(500).json({ 
               error : error.message
          });
     }
};

exports.loginUser = async (request, response) => {
     const { email, password } = request.body;
     try {
          const user = await User.findOne({ email });
          if (!user) return response.status(400).json({
               message : "Invalid Credentials"
          });

          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) return response.status(400).json({
               message : "Invalid Credentials"
          });

          const token = jwt.sign(
               { id : user._id },
               process.env.JWT_SECRET,
               { expiresIn : "1d" }
          );

          response.json({
               message : "Login Successfully",
               token
          });
     } catch (error) {
          response.status(500).json({
               error : error.message
          });
     }
};