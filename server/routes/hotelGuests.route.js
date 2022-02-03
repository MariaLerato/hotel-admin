import express from 'express'
import HotelGuestCtrl from "../Controllers/hotelGuests.controller.js"

const router =  express()
router.route("/guest").get(HotelGuestCtrl.apiGetHotelGuests)
.post(HotelGuestCtrl.apiPostHotelGuests)
.delete(HotelGuestCtrl.apiDeleteHotelGuests)

export default router
