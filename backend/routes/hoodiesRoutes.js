import express from "express";

import {addhoodies} from "../controllers/hoodiesController.js"
import multer from "multer"

const hoodiesRouter = express.Router();

// image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    return cb(null,`${Date.now()}${file.originalname}`)
  },
});
const upload = multer({ storage:storage });
 
hoodiesRouter.post("/add",upload.single("image"), addhoodies)

export default hoodiesRouter;

