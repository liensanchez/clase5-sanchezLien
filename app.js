let hidrogel = prompt("¿cuantos Hidrogel?");
let funda = prompt("¿cuantas fundas?");
alert("Se han agregado " + hidrogel + " Hidrogel y " + funda + " fundas a su pedido");

let hg = 1200 ;
let tpu =800;
function sumarProductos() {
  let Total = (hg*hidrogel) + (tpu*funda) ;
  return Total;
}
let compraTotal = sumarProductos ((hg*hidrogel) + (tpu*funda));
alert("El total de tu compra es de $" + compraTotal);

function saludar() {
  let nombre = prompt("Ingresa tu nombre:");
  let apellido = prompt("Ingresa tu apellido:");
  alert("Gracias por tu compra " + nombre + " " + apellido);
}
saludar();

//OBJETOS
const personayo = {
  //propiedades
  nombre:"lien",
  edad:21,
  provincia:"mendoza",
  //metodo
  saludar: function () {
    console.log("hola")
  }
}
//agregando un dato
personayo.profesion="desarrollador"
console.log(personayo)
const persona2 ={
  nombre:"will",
  apellido:"smith",
}
console.log(personayo.provincia)
console.log(personayo.saludar())