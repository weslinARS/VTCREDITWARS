const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario");
/* 
?La función recibirá como argumento un número de tarjeta de
?crédito y validar de acuerdo con las siguientes reglas:
?El número debe contener 16 dígitos, todo número entero.
?Debe contener al menos 2 dígitos diferentes representados
?(no pueden ser todos el mismo digito).
*/

const verificarLetra = (caracter) => {
  let car = caracter.toUpperCase().charCodeAt(0);
  return car > 64 && car < 91;
}; /*
inputs.forEach((input) => {
	input.addEventListener('keyup',validarFormulario );
	input.addEventListener('blur', validarFormulario);
});*/
var regex = /\-/i;
formulario.addEventListener("submit", (e) => {
    tarjeta = document.getElementById("numTarjeta").value;
    let cont = 0;
    var x = 0;
    let tarjetaModificada = [""];
    for (let i = 0; i < tarjeta.length; i++) {
    console.log(verificarLetra(tarjeta[i]));
    if (verificarLetra(tarjeta[i]) == false && isNaN(tarjeta[i])) {
        console.log("i -> "+ i+" x-> "+x);
      //! si lo que se encuentra es un guión la cadena se parte y se copia en una nueva variable
        let aux = tarjeta.slice(x, i); 
        x = i +1 ; 
        tarjetaModificada = tarjeta.concat(aux);
        console.log("cadena modifica -> "+tarjetaModificada);
        console.log("Ahora x vale = [" + x + "]");
    }
    
    }
    console.log(tarjeta.replace("-", "*"));
    console.log("hay un total de " + cont + " guiones");
    console.log(tarjeta);
    e.preventDefault();
});
