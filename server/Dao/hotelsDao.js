import { text } from "express"
import mongodb from "mongodb"

const ObjectId = mongodb.ObjectId

let hotels 

export default class HotelDAO{
    static async injectDB(conn){
        if(hotels){
            return
        }
        try{
            hotels = await conn.db(process.env.Database).collection("hotels")
        }catch(err){
            console.log(
                `Unable to establish a connection handle in hotelDao:${err},`
            )
        }
    }
    static async addHotel(hotelsId, hotel, date,description,adminId ){
        try{
            const hotelDoc = {
            name: hotel.name,
            hotel_id:hotelsId,
            text:description,
            image:hotel.image,
            guest:hotel.guest,
            room:hotel.room,
            province:hotel.province,
            city:hotel.city,
            adminId:adminId,
            checkIn:hotel.checkIn,
            checkOut:hotel.checkOut,
            status:hotel.status
            }
            console.log(hotelDoc)
           return await hotels.insertOne(hotelDoc)
        }catch(e){
            console.error(`Unable to post hotels :${e}`)
           
        }
    }
    static async deleteHotel(hotelId,adminId){
        try{
            const deleteResponse = await hotels.deleteOne({
                _id:ObjectId(hotelId),
                adminId:adminId
            }) 
            return deleteResponse
            
         }catch(e){
             console.error(`Unable to delete hotel:${e}`)
             return {error:e}
         }
    }
   
    static async getHotels({
        filters = null,
        page=0,
        hotelPerPage = 10,
    } = {}){
        let query
        if(filters){
            if("name" in filters){
                query = {$text:{$search:filters["name"]}}
            }
        }
        let cursor
        try{
            cursor = await hotels
            .find(query)
        }catch(e){
            console.log(`Unable to issue or find a command, ${e}`)
            return {hotelList:[], totalNumHotels:0}
        }
        const displayCursor = cursor.limit(hotelPerPage).skip(hotelPerPage * page)
        try{
            const hotelList = await displayCursor.toArray()
            const totalNumHotels = await hotels.countDocuments(query)
            return {hotelList,totalNumHotels}
        }catch(e){
            console.log(`Unable to convert cursor to array, ${e}`)
            return {hotelList:[],totalNumHotels:0}
        }
    }
   
    static async addHotelRoom(hotelId,name,description,date,image){
        try{
            const hotelRoomHoc = {
                hotel_id:ObjectId(hotelId),
                name:name,
                image:image,
                text:description,
                date:date

            }
            console.log(hotelRoomHoc)
            return await hotels.insertOne(hotelRoomHoc)
        }catch(e){
            console.error(`Unable to post hotel room :${e}`)
        }
    }
    static async getHotelRoom({
        filters = null,
        page=0,
        hotelPerPage = 10,
    } = {}){
        let query
        if(filters){
            if("name" in filters){
                query = {$text:{$search:filters["name"]}}
            }
        }
        let cursor
        try{
            cursor = await hotels
            .find(query)
        }catch(e){
            console.log(`Unable to issue or find a command, ${e}`)
            return {hotelList:[], totalNumHotels:0}
        }
        const displayCursor = cursor.limit(hotelPerPage).skip(hotelPerPage * page)
        try{
            const hotelList = await displayCursor.toArray()
            const totalNumHotels = await hotels.countDocuments(query)
            return {hotelList,totalNumHotels}
        }catch(e){
            console.log(`Unable to convert cursor to array, ${e}`)
            return {hotelList:[],totalNumHotels:0}
        }
    }
    static async updateHotel(hotelsId, hotel, date,text,adminId){
        try{
            const updateResponse =  await hotels.updateOne(
                {adminId: adminId,_id:ObjectId(hotelsId)},
                {$set:{text:text,checkIn:hotel.checkIn,checkOut:hotel.checkOut}}

            )
            return updateResponse
        }catch(e){
            console.error(`Unable to update hotel:${e}`)
            return {error:e}
        }
    }
 
}