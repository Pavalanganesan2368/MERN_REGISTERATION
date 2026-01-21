const mongoose = require('mongoose');

const connectDB = async () => {
     try {
          await mongoose.connect('mongodb+srv://pavalanganesan2368_db_user:(Pavalan2004)@cluster0.bmcwo5x.mongodb.net/users');
          console.log("MongoDB is Successfully Connected");
     } catch (error) {
          console.log(error.message);
          process.exit(1);
     }
}

module.exports = connectDB;