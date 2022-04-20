var hotel=new Object()
hotel.name='hi'
hotel.rooms=112
hotel.books=11
hotel.check=function(){
    return this.rooms-this.books
}
var elName=document.getElementById('hotelName')
elName.textContent=hotel.name
var elRooms=document.getElementById('rooms')
elRooms.textContent=hotel.check()