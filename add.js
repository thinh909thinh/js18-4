var hotel={
    name:'thinh',
    rooms:111,
    books:12

}
hotel.gym=true
hotel.pool=false
console.log(typeof hotel.name)
delete hotel.books
var elName=document.getElementById('hotelName')
elName.textContent=hotel.name
var elPools=document.getElementById('pool')
elPools.textContent=hotel.pool
var elGym=document.getElementById('gym')
elGym.textContent=hotel.gym