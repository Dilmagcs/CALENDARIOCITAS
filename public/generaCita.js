
 
var Paciente= localStorage.Paciente;
var Lugar= localStorage.Lugar;

if(Lugar==undefined){
    localStorage.Lugar='Costado norte de la escuela Japón, San Marcos de Tarrazú';;
    Lugar='Costado norte de la escuela Japón, San Marcos de Tarrazú';
    document.getElementById("Lugar").innerHTML=Lugar;
}else{
    Lugar=localStorage.Lugar;
    document.getElementById("Lugar").innerHTML=Lugar;
}

if(Paciente==undefined){
    localStorage.Paciente='';
    Paciente='-';
    document.getElementById("Paciente").value=Paciente;
}else{
    Paciente=localStorage.Paciente;
    document.getElementById("Paciente").value=Paciente;
}




var positionX= localStorage.positionx;
if(positionX==undefined){
    localStorage.positionx=171;
    positionX=171;
}else{
    positionX=localStorage.positionx;
}

var positionY= localStorage.positionY;
if(positionY==undefined){
    localStorage.positionY=66;
    positionY=66;
}else{
    positionY=localStorage.positionY;
}
function setLugar(valor){
    Lugar=valor;
    localStorage.Lugar=Lugar;
    generaImagen();

}

function setpositionX(valor){
    positionX=valor;
    localStorage.positionx=valor;
    generaImagen();

}
function setpositionY(valor){
    positionY=valor;
    localStorage.positionY=valor;
    generaImagen();

}

let image = new Image();
image.crossOrigin = "use-credentials";
image.src="/Logo.jpg";
function generaImagen(){
  
 
    espacio=parseInt(positionY);
    let Fecha = document.getElementById("Fecha").value;
    let Hora = document.getElementById("Hora").value;
    let Paciente = document.getElementById("Paciente").value;
    let Lugar = document.getElementById("Lugar").value;
    canvas = document.getElementById("citario");
    ctx = canvas.getContext("2d");
    
    ctx.clearRect(-1000, -1000, 1000, 1000);
    
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1000, 1000);
    ctx.drawImage(image,-10,5,200, 200 * image.height / image.width);
 
        
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.font = "bold 15px Arial";          
    
    ctx.fillText("Día de la cita",positionX,(-20+espacio));
    ctx.fillText("Fecha: "+Fecha,positionX,(0+espacio));
    ctx.fillText("Hora: "+Hora,positionX,(20+espacio));
    ctx.fillText("Paciente: "+Paciente,positionX,(40+espacio));
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.font = "bold 10px Arial";          
    ctx.fillText("Lugar: "+Lugar,10,190);
    console.log(10+positionY+" + "+ (3+espacio));
    images();
}
var dataURL;


function images(){

    var canvas = document.getElementById('citario');
    dataURL = canvas.toDataURL();
    document.getElementById("Image").src=dataURL;

}


window.onload(generaImagen());
 