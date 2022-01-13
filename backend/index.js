import app from './server.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.Port || 8000

MongoClient.connect(
    process.env.Reviews_db,{
        maxPoolSize: 50,
        wtimeoutMS:25,
        useNewUrlParser:true
    }
).catch(err=>{
    console.error(err.stack)
    process.exit(1)
})
.then(async client =>{
    app.listen(port,()=>{
        console.log(`Listening on port ${port}`)
    })
})