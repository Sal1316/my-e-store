import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI);
    console.log("SuccEsfully connEcted to MoNgoDB");
  } catch {
    console.error(`ERROR: Hello`);
    process.exit(1);
  }
};

export default connectDB;
