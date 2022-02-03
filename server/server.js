import express from 'express'
import cors from 'cors'
import mongodb from 'mongodb'
import hotels from './routes/hotelRoutes.js'
import hotelguests from "./routes/hotelGuests.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/hotels",hotels)
app.use("/api/hotelGuests",hotelguests)

app.use("*",(req,res)=>res.status(404).json({error:"not found"}))

export default app

