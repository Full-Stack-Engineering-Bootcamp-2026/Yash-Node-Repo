import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = 8080;
import 'dotenv/config'

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_URI as string);

    console.log(` MongoDB Connected successfully...`);
  } catch (error) {
    console.error(" MongoDB connection failed:", error);
    process.exit(1);
  }
};
connectDB()

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});