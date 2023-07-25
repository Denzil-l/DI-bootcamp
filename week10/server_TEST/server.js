import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/routes.js"

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(process.env.PORT || 3001,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
