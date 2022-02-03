import HotelDAO from "../Dao/hotelsDao.js";
import BSON from "bson";

const ObjectId = BSON.ObjectID

export default class HotelsController{
    static async apiPostHotel(req,res,next){
        try{
            const hotelsId = req.body.hotels_id
            const adminId = req.body.adminId
            const description = req.body.text
            const hotelInfo = {
                name:req.body.name,
                guest:req.body.guest,
                room:req.body.room,
                province : req.body.province,
                city:req.body.city,
                checkIn:req.body.checkIn,
                checkOut:req.body.checkOut,
                status:req.body.status
            }
            const date = new Date()
            const HotelResponse = await HotelDAO.addHotel(
                ObjectId(hotelsId),
                hotelInfo,
                description,
                date,
                adminId
            )
            res.json({status: "Success Ok"})
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
    static async apiUpdateHotel(req,res,next){
        try{
            const adminId = req.body.adminId
            const text = req.body.text
            const hotel ={
                checkIn:req.body.checkIn,
                checkOut:req.body.checkOut
            }

            const hotelResponse = await HotelDAO.updateHotel(
                adminId,
                req.body.hotelId,
                text,
                hotel
            )
            var {error} = hotelResponse
            if(error){
                res.status(400).json({error})
            }
            if(hotelResponse.modifiedCount === 0){
                throw new Error(
                    "unable to update hotel - user may not be original poster"
                )
            }
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
    static async apiGetHotels(req,res,next){
        const hotelsPerPage = req.query.hotelsPerPage ? parseInt(req.hotelsPerPage, 10) :20
        const page = req.query.page  ? parseInt(req.query.page, 10): 0
        
        const filters = {}
        if(req.query.name){
            filters.name = req.query.name
        }
        const {hotelList,totalNumHotels} = await HotelDAO.getHotels(
            filters,
            page,
            hotelsPerPage
        )
            let response = {
                hotels:hotelList,
                page:page,
                filters:filters,
                entries_per_page:hotelsPerPage,
                total_results:totalNumHotels
            }
            res.json(response)
            console.log(response)
    }
    static async apiDeleteHotel(req,res,next){
        try{
            const hotelId = req.query.id
            const adminId = req.body.adminId
            console.log(hotelId)
            const HotelResponse = await HotelDAO.deleteHotel(
              hotelId,
              adminId
            )
                console.log(HotelResponse)
            res.json({ status :"success"})
        }catch(e){
            res.status(500).json({error:e.message})
        }

    }
    static async apiPostHotelRooms(req,res,next){
        try{
            const hotelId = req.body.hotel_id
             const name=  req.body.name
            const description = req.body.text
            const date = new Date()
            const HotelRoomResponse = await HotelDAO.addHotelRoom(
                ObjectId(hotelId),
                name,
                description,
                date
            )
            console.log(HotelRoomResponse)
            res.json({status:"Success"})
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
    static async apiGetHotelRooms(req,res,next){
        const hotelsPerPage = req.query.hotelsPerPage ? parseInt(req.hotelsPerPage, 10) :20
        const page = req.query.page  ? parseInt(req.query.page, 10): 0
        const filters = {}
        if(req.query.name){
            filters.name = req.query.name
        }
        const {hotelList,totalNumHotels} = await HotelDAO.getHotelRoom(
            filters,
            page,
            hotelsPerPage
        )
            let response = {
                hotelrooms:hotelList,
                page:page,
                filters:filters,
                entries_per_page:hotelsPerPage,
                total_results:totalNumHotels
            }
            res.json(response)
            console.log(response)
    }
    static async apiDeleteHotelRooms(req,res,next){
        try{
            const hotel_id =  req.query.hotel_id
            
            console.log(hotel_id)
            const HotelResponse = await HotelDAO.deleteHotel(
              hotel_id,
            )
            console.log("the response:",HotelResponse)
            res.json({ status :"success"})
        }catch(e){
            res.status(500).json({error:e.message})
        }

    }

}