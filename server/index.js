import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import Connection from './db/connectdb.js';
import userRoute from './routes/user.route.js';
import todoRoute from './routes/todo.route.js';
import { isAuthenticated } from './middleware/isAuthenticated.js';


dotenv.config();

const PORT = process.env.PORT || 8000;


const app = express();

//Connect to MongoDB
Connection();

app.use(express.json());
app.use(cookieParser());


app.use("/practice/user", userRoute);
app.use("/practice/todo",isAuthenticated, todoRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});