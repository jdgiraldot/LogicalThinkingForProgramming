// Solucion del ejercicio 1
function solucionEjercicio1() {
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let respuesta = document.getElementById('rta')
    
    respuesta.innerHTML = "El resultado es: "+ parseInt(`${num1 - num2}${num1 + num2}`)
}