let Hidrogel = prompt("¿cuantos Hidrogel?");
let Funda = prompt("¿cuantas fundas?");
alert("Se han agregado " + Hidrogel + " Hidrogel y " + Funda + " fundas a su pedido");

function sumarProductos() {
  let Total = (Hg*Hidrogel) + (Tpu*Funda) ;
  return Total;
}
let Hg = 1200 ;
let Tpu =800;
let compraTotal = sumarProductos ((Hg*Hidrogel) + (Tpu*Funda));
alert("El total de tu compra es de $" + compraTotal);

function saludar() {
  let nombre = prompt("Ingresa tu nombre:");
  let apellido = prompt("Ingresa tu apellido:");
  alert("Gracias por tu compra " + nombre + " " + apellido);
}
saludar();