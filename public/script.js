function crearMatrices() {
    const filas1 = parseInt(document.getElementById("filas1").value);
    const columnas1 = parseInt(document.getElementById("columnas1").value);
    const filas2 = parseInt(document.getElementById("filas2").value);
    const columnas2 = parseInt(document.getElementById("columnas2").value);
  
    const entradasMatrices = document.getElementById("entradasMatrices");
    entradasMatrices.innerHTML = "";
  
    for (let i = 0; i < filas1; i++) {
      for (let j = 0; j < columnas1; j++) {
        entradasMatrices.innerHTML += `<input type="number" id="matriz1_${i}_${j}" placeholder="Matriz 1[${i}][${j}]">`;
      }
      entradasMatrices.innerHTML += "<br>";
    }
  
    entradasMatrices.innerHTML += "<br>";
  
    for (let i = 0; i < filas2; i++) {
      for (let j = 0; j < columnas2; j++) {
        entradasMatrices.innerHTML += `<input type="number" id="matriz2_${i}_${j}" placeholder="Matriz 2[${i}][${j}]">`;
      }
      entradasMatrices.innerHTML += "<br>";
    }
  }
  
  function multiplicarMatrices() {
    const filas1 = parseInt(document.getElementById("filas1").value);
    const columnas1 = parseInt(document.getElementById("columnas1").value);
    const filas2 = parseInt(document.getElementById("filas2").value);
    const columnas2 = parseInt(document.getElementById("columnas2").value);
  
    const matriz1 = [];
    const matriz2 = [];
  
    for (let i = 0; i < filas1; i++) {
      matriz1.push([]);
      for (let j = 0; j < columnas1; j++) {
        matriz1[i].push(
          parseFloat(document.getElementById(`matriz1_${i}_${j}`).value)
        );
      }
    }
  
    for (let i = 0; i < filas2; i++) {
      matriz2.push([]);
      for (let j = 0; j < columnas2; j++) {
        matriz2[i].push(
          parseFloat(document.getElementById(`matriz2_${i}_${j}`).value)
        );
      }
    }
  
    // Validar dimensiones de las matrices para la multiplicación
    if (columnas1 !== filas2) {
      document.getElementById("resultado").innerText =
        "¡Las matrices no se pueden multiplicar!";
      return;
    }
  
    // Realizar la multiplicación de matrices
    const resultado = [];
    for (let i = 0; i < filas1; i++) {
      resultado.push([]);
      for (let j = 0; j < columnas2; j++) {
        let suma = 0;
        for (let k = 0; k < columnas1; k++) {
          suma += matriz1[i][k] * matriz2[k][j];
        }
        resultado[i].push(suma);
      }
    }
  
    // Mostrar el resultado
    document.getElementById("resultado").innerText =
      "Matriz Resultante:\n" + JSON.stringify(resultado);
  }
  