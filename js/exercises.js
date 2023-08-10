// Solución Ejercicio 1

function solucionEjercicio1() {
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let respuesta = document.getElementById('rta')
    
    respuesta.innerHTML = "El resultado es: "+ parseInt(`${num1 - num2}${num1 + num2}`)
}

// Solución Ejercicio 2
function solucionEjercicio2a() {
    solucionEjercicio2([27,36,45,54,63,72])
}
function solucionEjercicio2b() {
    solucionEjercicio2([27,36,45,54,42,72])
}

function solucionEjercicio2(numbers) {
    let valorInicial = 3
    let tamaño = numbers.length
    let multiplicadorBase = numbers[0] / valorInicial
    let respuesta = document.getElementById('rta')
  
    for (let i = 0; i < tamaño; i++) {
      if (multiplicadorBase != (numbers[i] / valorInicial)) {
        respuesta.innerHTML = "El resultado es: "+ false
        return
      }
      valorInicial++
    }
    respuesta.innerHTML = "El resultado es: "+ multiplicadorBase
}