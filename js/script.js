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
        <pre>function solucion() {<br>  return parseInt(&#96&#36{num1 - num2}&#36{num1 + num2}&#96)<br>}</pre>
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
        let runCode = document.getElementById('btn')
        runCode.addEventListener('click', solucionEjercicio1)

      break;
    case 2:
      content.innerHTML = `<h1>Ejercicio 2</h1><p>Contenido del ejercicio 2...</p>`;
      break;
    case 3:
      content.innerHTML = `<h1>Ejercicio 3</h1><p>Contenido del ejercicio 3...</p>`;
      break;
    case 4:
      content.innerHTML = `<h1>Ejercicio 4</h1><p>Contenido del ejercicio 4...</p>`;
      break;
    case 5:
      content.innerHTML = `<h1>Ejercicio 5</h1><p>Contenido del ejercicio 5...</p>`;
      break;
    default:
      content.innerHTML = `<h1>Bienvenido a la Página</h1><p>Contenido de ejemplo...</p>`;
  }
}