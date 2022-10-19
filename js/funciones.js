setTimeout(()=>{
    var titulo=document.getElementById("pregunta");
    titulo.innerText="Sé solo feo";
    titulo.style.backgroundColor="blue";
    titulo.style.color="white";
},6000);
window.open();
var subVentana=window.open("https://www.marca.com","nueva","height=800");
setTimeout(()=>{
    subVentana.close();
},6000);