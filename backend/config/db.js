import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://jayjathar31:1234jay@cluster0.rlo8w3t.mongodb.net/hoodies-website"
    )
    .then(() => console.log("DB Connected"));
};
