function hotel(name,rooms,booked){
    this.n=name,
    this.r=rooms,
    this.b=booked,
    this.check=function(){
        return this.r-this.b
    }
}
var quyhotel=new hotel('quay',123,22)
var parkhotel=new hotel('thinh',666,22)
var del1=quyhotel.n+'ro0oms:'
del1+=quyhotel.check();
var elhotel=document.getElementById('hotel1')
elhotel.textContent=del1
var del2=parkhotel.n+'deptrai'
del2+=parkhotel.check()
var el2=document.getElementById('hotel2')
el2.textContent=del2