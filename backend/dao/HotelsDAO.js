import  mongodb from "mongodb";

const ObjectId = mongodb.ObjectId

let hotels

export default class HotelsDao{
    static async injectDB(conn){
        if(hotels){
            return
        }
        try{
            hotels = await conn.db(process.env.ConnectionString).collection("UserClient")
        }
        catch(e){
            console.log(`Unable to establish collection handles in userDao: ${e}`)
        }
    }
    static async addHotels(hotelId,hotel,description,date){
        try{
            const userDoc = {
                name : hotel.name,
                hotel_id:hotelId,
                date:date,
                text:description,
               
            }
            return await hotels.insertOne(userDoc)
        }
        catch (e){
            console.error(`Unable to post review : ${e}`)
        }
    }
    static async getUsers({
        filters=null,
        page = 0,
        usersPerPage = 10,

    } = {}){
        let query
        if(filters){
            if("name" in filters){
                query = { $text:{ $search: filters["name"]}}
            }
        }
        let cursor
        try{
            cursor = await users
             .find(query)
        } catch (e){
            console.log(`Unable to issue or find a command, ${e}`)
            return {userList:[],totalNumUsers:0}
        }
        const displayCursor = cursor.limit(usersPerPage).skip(usersPerPage * page)
        try{
            const userList = await displayCursor.toArray()
            const totalNumUsers = await users.countDocuments(query)
            return {userList,totalNumUsers}
        }
        catch (e){
            console.log(`Unable to convert cursor to array, ${e}`)
            return {userList:[],totalNumUsers:0}
        }

    }
}