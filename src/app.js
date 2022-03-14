import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";

// import router
import productsRouter from "../routes/products"
import postsRouter from "../routes/posts"


const app = express();

// su dung thu vien
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// route
app.use("/api", productsRouter)
app.use("/api", postsRouter)

// connect database
mongoose.connect("mongodb://localhost:27017/nodejs")
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error))
 

// connection
const PORT = 3001;
app.listen(PORT, () => {
    console.log("server is running port ", PORT);
})