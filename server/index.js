import express from 'express';
import dotenv from "dotenv";
import Connection from './db/connectdb.js';

dotenv.config();

const PORT = process.env.PORT || 8000;


const app = express();

//Connect to MongoDB
Connection();


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});