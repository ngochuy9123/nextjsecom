import mongoose from "mongoose";

const dbConnect = async () => {
  console.log("Hello MongoDB");
  if (mongoose.connection.readyState >= 1) {
    console.log("MongoDB fail");
    return;
  }
  console.log(process.env.DB_URI);
  mongoose.connect(process.env.DB_URI);
};

export default dbConnect;
