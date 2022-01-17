import RestaurantsDAO from "../dao/restaurantsDAO.js";

export default class RestaurantsController{
    static async apiGetRestaurants(req,res,next){
        const restaurantsPerPage = req.query.restaurantsPerPage ? parseInt(req.restaurantsPerPage, 10) :20
        const page = req.query.page ? parseInt(req.query.page,10):0

        const filters = {}  
            if (req.query.cuisine) {
              filters.cuisine = req.query.cuisine
            }
            else if (req.query.zipcode) {
                filters.zipcode =req.query.zipcode
            } else if (req.query.name) {
                filters.name = req.query.name

             
        }

        const {restaurantsList, totalNumRestaurants} = await RestaurantsDAO.getRestaurants({
            filters,
            page,
            restaurantsPerPage
        })
        let response = {
            restaurants:restaurantsList,
            page:page,
            entries_per_page:restaurantsPerPage,
            total_results:totalNumRestaurants,
            filters:filters

        }
        res.json(response)
    
}
}