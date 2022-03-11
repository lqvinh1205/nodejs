import express from "express";
import cors from "cors";
import morgan from "morgan";
import productsRouter from "../routes/products"

const app = express();

//middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/api", productsRouter)

const PORT = 3001;

app.listen(PORT, () => {
    console.log("server is running port ", PORT);
})