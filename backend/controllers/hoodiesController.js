import { error } from "console";
import hoodiesModel from "../models/hoodiesModel.js"

import fs from "fs";

//add hoodies item

const addhoodies = async (req, res) => {
  let image_filename = `${(req,file, filename)}`;

  const hoodies = new hoodiesModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    categroy: req.body.categroy,
    image: image_filename,
  });
  try {
    await hoodies.save();
    res.json({ seccess: true, message: "Hoodies Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export  { addhoodies };
