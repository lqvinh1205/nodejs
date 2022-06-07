import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";

// import router
import productsRouter from "./routes/products"
import postsRouter from "./routes/posts"
import usersRouter from "./routes/users"
import categoryRouter from "./routes/category"
import authRouter from "./routes/auth"
import cartRouter from "./routes/cart"


const app = express();

// su dung thu vien
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// route
app.use("/api", productsRouter)
app.use("/api", postsRouter)
app.use("/api", usersRouter)
app.use("/api", categoryRouter)
app.use("/api", authRouter)
app.use("/api", cartRouter)
// connect database
// mongoose.connect("mongodb+srv://lqvinh1205:tmkgg123@cluster.rzbt7.mongodb.net/nodejs?retryWrites=true&w=majority" || "mongodb://localhost:27017/nodejs")
//     .then(() => console.log("Kết nối db thành công"))
//     .catch((error) => console.log(error))
 
mongoose.connect("mongodb://localhost:27017/nodejs")
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error))

// connection
const PORT = process.env.PORT || 8000;
// const PORT = 8000;
app.listen(PORT, () => {
    console.log("server is running port ", PORT);
})