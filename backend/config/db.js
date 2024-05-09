import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI);
    console.log("Succesfully connected to MongoDB");
  } catch {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
