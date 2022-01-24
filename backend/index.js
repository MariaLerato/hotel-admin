import app from './server.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'
import HotelsDAO from './dao/HotelsDAO.js'
import mongoose from 'mongoose'
import ReviewsDAO from './dao/reviewsDAO.js'


// Address
const url = "http://localhost:5000/api/v1/restaurants"

mongoose.connect(url).then((ans)=>{
    console.log("ConnectedSuccessful")
}).catch((err)=>{
    console.log("Error")
})
// Calling Schema class
const Schema = mongoose.Schema;

// https://www.geeksforgeeks.org/mongoose-module-introduction/
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.Port || 8000

MongoClient.connect(
    process.env.ConnectionString,{
        maxPoolSize: 50,
        wtimeoutMS:25,
        useNewUrlParser:true
    }
).catch(err=>{
    console.error(err.stack)
    process.exit(1)
})
.then(async client =>{
    await  HotelsDAO.injectDB(client)
    app.listen(port,()=>{
        console.log(`Listening on port ${port}`)
    })
})