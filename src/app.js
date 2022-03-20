import express from "express"
import morgan from "morgan"
import mongoose from "mongoose"


//import routes
import routerProduct from './routes/products'
import routerCategory from './routes/category'

// Khởi tạo đối tượng app từ thư viện express
const app = express()

// Sử dụng các thư viện
app.use(morgan('tiny'))
app.use(express.json())


// Sử dụng các router được định nghĩa
app.use('/api', routerProduct)
app.use('/api', routerCategory)


// connect database
mongoose.connect("mongodb://localhost:27017/demo-node", () => {
    console.log("connect db success");
})

// lắng nghe cổng PORT để chạy server
const PORT = 3001;
app.listen(PORT, () => {
    console.log("server is runing port: ", PORT);
})
