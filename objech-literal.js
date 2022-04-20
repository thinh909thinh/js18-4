//oj1
// var hotel={
//     name:'hi',
//     rooms:30,
//     booked:25,
//     check : function(){
//         return this.rooms-this.booked
//     }
// }
// var elName =document.getElementById('hotelName')
// elName.textContent=hotel.name
// var elRooms =document.getElementById('rooms')
// elRooms.textContent=hotel.check()
//oj2
var hotel={
    name: 'ho',
    roooms:11,
    books:10,
    check:function(){
        return this.roooms-this.books

    }
}
var elName =document.getElementById('hotelName')
 elName.textContent=hotel.name
var elRooms =document.getElementById('rooms')
elRooms.textContent=hotel.check()