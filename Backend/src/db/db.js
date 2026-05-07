const mongoose = require('mongoose');
async function connectDB(){
  await mongoose.connect("mongodb+srv://anshguptatech96_db_user:8jbzvKUmQT2ayfSf@firstcluster.enfiybn.mongodb.net/firstDB")
  console.log("Connected to MongoDB");
}
module.exports = connectDB;
