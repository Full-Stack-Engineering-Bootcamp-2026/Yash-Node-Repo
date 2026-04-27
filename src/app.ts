import express, { Request, Response } from "express";
import path from "path";    
import mongoose from "mongoose";


const MONGODB_URI = process.env.MONGO_ATLAS_CONNECTION_URI as string;

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port,()=>{
  console.log(`server started at ${port}`)
})
// const startServer = async () => {
//   try {
//     await mongoose.connect(MONGODB_URI);
//     app.listen(8080);
//     console.log("MongoDB connected successfully!!!");
//     console.log("server started at 8080");
//   } catch (err) {
//     console.log(err);
//   }
// };

// startServer();
