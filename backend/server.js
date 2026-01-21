const express = require('express');
const routes = require('./routes/authRoutes');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
connectDB();

const PORT = process.env.PORT || 5000;

app.use("/api/auth", routes);

app.get("/", (request, response) => {
     response.send("API Running");
});

app.listen(PORT, () => {
     console.log(`Server is Started : http://localhost:5000/api/auth`);
});