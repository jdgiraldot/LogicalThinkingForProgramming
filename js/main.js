function showContent(exerciseNumber) {
  let content = document.getElementById("content");
  
  switch(exerciseNumber) {
    case 1:
      content.innerHTML = `
      <h1>Ejercicio 1 - Operaciones Matemáticas</h1>
      <p>Encuentra la lógica de las siguientes operaciones y números:</p>
      <ul>
        <li>5 + 4 = 19</li>
        <li>8 + 2 = 610</li>
        <li>10 + 8 = 218</li>
        <li>12 + 9 = 321</li>
        <li>18 + 2 = 1620</li>
        <li>21 + 5 = 1626</li>
      </ul>
      <h2>Solución</h2>
      <p>Las operaciones correctas para llegar a la solución son las siguientes:</p>
      <ul>
        <li>(5-4) = 1 : (5+4) = 9 → 19</li>
        <li>(8-2) = 6 : (8+2) = 10 → 610</li>
        <li>(10-8) = 2 : (10+8) = 18 → 218</li>
        <li>(12-9) = 3 : (12+9) = 21 → 321</li>
        <li>(18-2) = 16 : (18+2) = 20 → 1620</li>
        <li>(21-5) = 16 : (21+5) = 26 → 1626</li>
      </ul>
      <h2>Código en JavaScrip</h2>
      <pre><code>function solucion(num1, num2) {
  return parseInt(&#96&#36{num1 - num2}&#36{num1 + num2}&#96)
}</code></pre>
      <h2>Probar el código</h2>
      <div id="ejercicio-1">
        <p>Primer número:</p><input type="number" id="num1">
        <p>Segundo número:</p><input type="number" id="num2">
        <p>
            <button id="btn">Run Code</button>
        </p>
        <p></p>
        <h3 id="rta"></h3>
      </div>
      `;
      let runCodeExe1 = document.getElementById('btn')
      runCodeExe1.addEventListener('click', solucionEjercicio1)
      break;

    case 2:
      content.innerHTML = `
      <h1>Ejercicio 2 - Obten el factor multiplicador</h1>
      <p>Vamos a tomar como base los números del 3 al 8 para multiplciarlos por un mismo factor desconocido (x) que nos da ciertos resultados.</p>
      <p>Entonces, dada una función que recibe un array númerico con los resultados debes encontrar el factor multiplicador (x) para obtener ese resultado multiplicando por los números del 3 al 8.</p>
      <p>Ejemplo: En el siguiente caso el factor sería 9.</p>
      <ul>
        <li>3 * x =  27</li>
        <li>4 * x =  36</li>
        <li>5 * x =  45</li>
        <li>6 * x =  54</li>
        <li>7 * x =  63</li>
        <li>8 * x =  72</li>
      </ul>
      <p>Sí un solo factor multiplicador difiere del resto se regresa <b>false</b>.</P>
      <P>En el siguiente ejemplo la función regresaria false porque hay una resultado que tiene como factor multiplicador el 6 en lugar del 9 como el resto.</p>
      <ul>
        <li>3 * x =  27</li>
        <li>4 * x =  36</li>
        <li>5 * x =  45</li>
        <li>6 * x =  54</li>
        <li>7 * x =  42 👈</li>
        <li>8 * x =  72</li>
      </ul>

      <h2>Código en JavaScrip</h2>
      <pre><code>function solution(numbers) {
  let valorInicial = 3
  let tamaño = numbers.length
  let multiplicadorBase = numbers[0] / valorInicial
        
  for (let i = 0; i < tamaño; i++) {
    if (multiplicadorBase != (numbers[i] / valorInicial)) {
      return false
    }
    valorInicial++
  }
  return multiplicadorBase
}</code></pre>
      <h2>Probar el código</h2>
      <div>
        <p>Array de prueba 1: [ 27, 36, 45, 54, 63, 72]<br>Array de prueba 2: [ 27, 36, 45, 54, 42, 72]</p>
        <p><button id="btn1">Run Code Input 1</button> <button id="btn2">Run Code Input 2</button></p>
        <p></p>
        <h3 id="rta"></h3>
        <br>
      </div>
      `;
      let runCodeInput1 = document.getElementById('btn1')
      runCodeInput1.addEventListener('click', solucionEjercicio2a)

      let runCodeInput2 = document.getElementById('btn2')
      runCodeInput2.addEventListener('click', solucionEjercicio2b)
      break;

    case 3:
      content.innerHTML = `
      <h1>Ejercicio 3 - Operaciones matemáticas</h1>
      <p>Encuentra la lógica en las siguientes operaciones y números:</p>
      <ul>
        <li>3 + 2 = 91</li>
        <li>5 + 4 = 251</li>
        <li>9 + 3 = 366</li>
        <li>8 + 6 = 562</li>
      </ul>
      <h2>Solución</h2>
      <p>Las operaciones correctas para llegar a la solución son las siguientes:</p>
      <ul>
        <li>3 (2+1) = 9 : (3-2) = 1 → 91</li>
        <li>5 (4+1) = 25 : (5-4) = 1 → 251</li>
        <li>9 (3+1) = 36 : (9-3) = 6 → 366</li>
        <li>8 (6+1) = 56 : (8-6) = 2 → 562</li>
      </ul>
      <h2>Código en JavaScrip</h2>
      <pre><code>function solucion(num1, num2) {
  return parseInt(&#96&#36{num1*(num2 + 1)}&#36{num1 - num2}&#96)
}</code></pre>
      <h2>Probar el código</h2>
      <div>
        <p>Primer número:</p><input type="number" id="num1">
        <p>Segundo número:</p><input type="number" id="num2">
        <p>
          <button id="btn">Run Code</button>
        </p>
        <p></p>
        <h3 id="rta"></h3>
      </div>
      `;
      let runCodeExe3 = document.getElementById('btn')
      runCodeExe3.addEventListener('click', solucionEjercicio3)
      break;

    case 4:
      content.innerHTML = `
      <h1>Ejercicio 4 - Identifica la operación</h1>
      <p>Encuentra la lógica en las siguientes operaciones y números:</p>
      <ul>
        <li>3 + 2 = 33</li>
        <li>4 + 8 = 288</li>
        <li>5 + 3 = 3,140</li>
        <li>6 + 3 = 46,674</li>
      </ul>
      <h2>Solución</h2>
      <p>Las operaciones correctas para llegar a la solución son las siguientes:</p>
      <ul>
        <li>(3^3) = 27 : (3*2) = 6 → 33</li>
        <li>(4^4) = 256 : (4*8) = 32 → 288</li>
        <li>(5^5) = 3,125 : (5*3) = 15 → 3,140</li>
        <li>(6^6) = 46,656 : (6*3) = 18 → 46,674</li>
      </ul>
      <h2>Código en JavaScrip</h2>
      <pre><code>function solucion(num1, num2) {
  return parseInt(&#96&#36{(num1**num1) + (num1*num2)}&#96)
}</code></pre>
      <h2>Probar el código</h2>
      <div>
        <p>Primer número:</p><input type="number" id="num1">
        <p>Segundo número:</p><input type="number" id="num2">
        <p>
          <button id="btn">Run Code</button>
        </p>
        <p></p>
        <h3 id="rta"></h3>
      </div>
      `;
      let runCodeExe4 = document.getElementById('btn')
      runCodeExe4.addEventListener('click', solucionEjercicio4)
      break;

    case 5:
      content.innerHTML = `
      <h1>Ejercicio 5</h1><p>Contenido del ejercicio 5...</p>
      `;
      break;

    default:
      content.innerHTML = `
      <h1>Bienvenido/a 🧠📖🖋️</h1>
      <h2>En esta sección revizaremos algunos ejercicios de Pensamiento Lógico para programanción</h2>
      <p>Selecciona alguno de los ejercicios de la izquierda para comenzar...</p>
      `;
  }
}