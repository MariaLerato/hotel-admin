import http from "../http";

class BackendInfo{
 getAll(page=0){
     return http.get(`?page=${page}`)
 }
 createGuest(data){
     return http.post("/",data)
 }
 deleteUser(id){
    return http.delete(`hotel?id=${id}`)
}

}
export default new BackendInfo()