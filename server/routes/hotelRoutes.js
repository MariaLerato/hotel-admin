import express from 'express'
import HotelsCtrl from '../Controllers/hotelControllers.js'

const router = express.Router()

router.route("/")
.get(HotelsCtrl.apiGetHotels)
.post(HotelsCtrl.apiPostHotel)
.delete(HotelsCtrl.apiDeleteHotel)
.put(HotelsCtrl.apiUpdateHotel)
router.route("/room").get(HotelsCtrl.apiGetHotelRooms)
.post(HotelsCtrl.apiPostHotelRooms)
.delete(HotelsCtrl.apiDeleteHotelRooms)

export default router

