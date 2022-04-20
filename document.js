var msg ='<p><b>page</b> '+ document.title +'<br />'+'<b>page add:</b>'+document.URL+'<br/>'+'<b>last :</b>'+document.lastModified+'</p>'
var el =document.getElementById('footer')
el.innerHTML=msg
console.log(msg)