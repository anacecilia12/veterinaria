function saludar(){
  alert("Hola querida mascota");
}

function presentarse(){
  alert("Te saluda Ana Sotelo")
}

const botonSaludo = document.getElementById("saludo");

botonSaludo.addEventListener("click", presentarse);
  console.log("Hiciste click");
