var say ='home sweet homee'
var smg ='<h2> length</h2><p>'+ say.length+'</p>'
smg+='<h2>upper</h2><p>'+say.toLocaleUpperCase()+'</p>'
smg+='<h2>lower</h2><p>'+say.toLocaleLowerCase()+'</p>'
smg+='<h2>charcacindex:12dfd</h2><p>'+say.charAt(12)+'</p>'
smg+='<h2>first ee</h2><p>'+say.indexOf('ee')+'</p>'
smg+='<h2>last e</h2><p>'+say.lastIndexOf('e')+'</p>'

smg+='<h2>charac index 8-14</h2><p>'+say.substring(8,14)+'</p>'
smg+='<h2>replace</h2><p>'+say.replace('me','lllllllllll')+'</p>'
var el=document.getElementById('info')
el.innerHTML=smg
