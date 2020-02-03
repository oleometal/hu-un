function iniciar() {
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d')
    var imagen=new Image();
    imagen.src="http://www.minkbooks.com/images/logo.jpg";
    imagen.addEventListener("load", function(){
        lienzo.drawImage(imagen,20,20)}, false);
        
}
window.addEventListener("load", iniciar, false)