var hihi ={
    ten:'thinh',
    namsinh:1998,
    diachi:'ha dong'

}
var hi=document.getElementById('hello')
hi.textContent=hihi.ten
function user(firtsName,lastName){
    this.firtsName=firtsName;
    this.lastName=lastName
}
var pro=new user('thinh','nguyen')
var de = document.getElementById('hi')
console.log(pro)
de.textContent=pro.firtsName
