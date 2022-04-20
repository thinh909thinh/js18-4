var today=new Date()
var year=today.getFullYear()
var est= new Date('apr 15,1998 22:22:33')
var hi=today.getTime()
var difference=today.getTime()-est.getTime()
difference=(difference/31556900000)
var elMsg=document.getElementById('message')
elMsg.textContent=Math.floor(difference)+'year of'
console.log(hi)