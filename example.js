
    var hotel={
        name: 'thinh',
        roomRate:240,
        discount:15,
        offePrice:function(){
            var offePrice=this.roomRate+((100-this.discount)/100);
            return offePrice;
        }
    }
var hotelNmae,roomRate,specialRate;
hotelNmae=document.getElementById('hotelName')
roomRate=document.getElementById('roomRate')
specialRate=document.getElementById('specialRate')
hotelNmae.textContent=hotel.name
roomRate.textContent='$' +hotel.roomRate.toFixed(2)
specialRate.textContent='$'+hotel.offePrice()
var expityMsg
var today 
var elEnds
function offerExpires(today){
    var weekFormToday,day,date,month,year ,dayName,monthName;
    weekFormToday=new Date(today.getTime()+7*24*60*60*1000)
    dayName=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    monthName['January','February','March','April','May','June','July','August','September','Octhber','Noveber','December']
    day=dayName[weekFormToday.getDay()]
    date=weekFormToday.getDate()
    month=monthName[weekFormToday.getMonth()]
    year=weekFormToday.getFullYear()
    expityMsg='offer expongs next'
    expityMsg+= day+'<br/>('+ date+' '+ month +' '+ year +')'
    return expityMsg


}
today=new Date()
elEnds=document.getElementById('offerEnds')
elEnds.innerHTML=offerExpires(today)



