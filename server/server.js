import express from "express";
import morgan from "morgan"; 
import cors from "cors";
import mongoose from "mongoose";
import { DATABASE } from "./config.js";
import authRoutes from './routes/auth.js';


const app = express();

//db
//mongoose.set("srtictQuery",false);
mongoose
    .connect(DATABASE)
    .then(() => console.log("db_connected"))
    .catch((err) => console.log(err));

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes middlware
app.use('/api', authRoutes)



app.listen(8080,() => console.log('server running on port 8080'));