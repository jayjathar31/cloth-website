import mongoose, { Types } from "mongoose";

const hoodiesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
});

const hoodiesModel =
  mongoose.model.hoodies || mongoose.model("hoodies", hoodiesSchema);

export default hoodiesModel;
