var sgm ='<h2>browser ne</h2><p>width ne:'+ innerWidth+'</p>'
sgm+='<p>height ne:'+ window.innerHeight+'</p>'
sgm+='<h2>screen ne</h2><p>items ne :'+ screen.length+'</p>'
sgm+='<p>height ne:'+ window.screen.height+'</p>'
var el=document.getElementById('info')
el.innerHTML=sgm
alert('current page:')
console.log( window.screen.length)