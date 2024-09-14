const express = require("express");
const app = express();
const mongoose = require("mongoose");




const connectDB= async=>{

  try {
    mongoose.connect(
      "mongodb+srv://bakarr19861:1986@bakarr86.2hczz.mongodb.net/?retryWrites=true&w=majority&appName=bakarr86",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )

    console.log("Database connected all successfully");
  } catch (error) {

      console.error("Error connecting to database:", error);
  }

  
}


module.exports=connectDB