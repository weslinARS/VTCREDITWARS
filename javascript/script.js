const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll("#formulario");
/* 
?La función recibirá como argumento un número de tarjeta de
?crédito y validar de acuerdo con las siguientes reglas:
?El número debe contener 16 dígitos, todo número entero.
?Debe contener al menos 2 dígitos diferentes representados
?(no pueden ser todos el mismo digito).
*/


const verificarLetra = (caracter ) =>{
    let car = caracter.toUpperCase().charCodeAt(0);
    return car > 64 && car < 91 ; 
}; 
formulario.addEventListener('submit',(e) =>{
    tarjeta= document.getElementById("numTarjeta").value;
    console.log("tarjeta ingresada ->"+ tarjeta);
    for (let i = 0; i < tarjeta.length; i++) {
        if(!(verificarLetra(tarjeta[i]) || (tarjeta >= 48 && tarjeta <= 57)  )){
            tarjeta.slice(i,i+1);
        }
    }
    alert(tarjeta);
    e.preventDefault();
});
