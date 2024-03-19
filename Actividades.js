//Uso IF
function usoIf() {
    var var1 = parseInt(document.getElementById("dato1").value);
    var var2 = parseInt(document.getElementById("dato2").value);
    var var3 = parseInt(document.getElementById("dato3").value);
    var resultado = document.getElementById("resultado");

    // Verificar si los campos están vacíos o no son números
    if (isNaN(var1) || isNaN(var2) || isNaN(var3)) {
        resultado.textContent = "Por favor, ingrese números válidos en todos los campos.";
    } else {
        if (var1 > var2 && var1 > var3) {
            resultado.textContent = "El mayor es: " + var1;
        } else if (var2 > var1 && var2 > var3) {
            resultado.textContent = "El mayor es: " + var2;
        } else {
            resultado.textContent = "El mayor es: " + var3;
        }
    }
}

//Uso del for
function usoFor() {
    var output = "";
    for (let index = 2; index <= 100; index += 2) {
        output += index + "<br>";
    }
    document.getElementById("resultado").innerHTML = output;
}

function suma100()
{
    var output =0;
        for (let index = 0; index <= 100; index++) {
            output += index;
        }
        document.getElementById("resultado").innerHTML = '<br>'+ '<b>' + output + '<b>';
}

//Uso While
function usoWhile() {
    var output = "";
    var index = 2;
    while (index <= 100) {
        output += index + "<br>";
        index += 2;
    }
    document.getElementById("resultado").innerHTML = output;
}

function suma100While() {
    var output = 0;
    var index = 0;
    while (index <= 100) {
        output += index;
        index++;
    }
    document.getElementById("resultado").innerHTML = '<br>' + '<b>' + output + '<b>';
}

//Insercion
function insercion() {
    // Obtener el valor del input y convertirlo en un arreglo
    let inputArray = document.getElementById('inputArray').value;
    let D = inputArray.split(',').map(Number);

    // Ordenar el arreglo utilizando el algoritmo de inserción
    for (let i = 1; i < D.length; i++) {
        let j = i;
        while (j > 0 && D[j] < D[j - 1]) {
            let aux = D[j];
            D[j] = D[j - 1];
            D[j - 1] = aux;
            j--;
        }
    }

    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById('resultado').innerText = 'Arreglo ordenado: ' + D.join(', ');
}

//Seleccion
function seleccion() {
    let inputArray = document.getElementById('inputArray').value;
    let D = inputArray.split(',').map(Number);

    let resultado = '';

    for (let i = 0; i < D.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < D.length; j++) {
            if (D[min] > D[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let aux = D[min];
            D[min] = D[i];
            D[i] = aux;
        }
    }

    resultado = 'Arreglo ordenado: ' + D.join(', ');
    document.getElementById('resultado').innerText = resultado;
}

//Bubble
function bubble() {
    let inputArray = document.getElementById('inputArray').value;
    let D = inputArray.split(',').map(Number);

    let resultado = '';

    for (let i = 0; i < D.length; i++) {
        for (let j = 0; j < D.length - 1; j++) {
            if (D[j] > D[j + 1]) {
                let aux = D[j];
                D[j] = D[j + 1];
                D[j + 1] = aux;
            }
        }
    }

    resultado = 'Arreglo ordenado: ' + D.join(', ');
    document.getElementById('resultado').innerText = resultado;
}

// Definir la función para determinar si un número es par o impar
function determinarParidad() {
    // Obtener el valor del campo de entrada
    var numero = document.getElementById("dato").value;
    var resultadoElemento = document.getElementById("resultado");
    
    // Convertir el valor a un número
    numero = parseInt(numero);
    
    if (isNaN(numero)) {
        resultadoElemento.textContent = 'Por favor, ingrese un número válido.';
    } else {
        if (numero % 2 === 0) {
            resultadoElemento.textContent = 'Par';
        } else {
            resultadoElemento.textContent = 'Impar';
        }
    }
}

//Leer un numero y mostrar su tabla de multiplicar
function tablaNum() {
    var numero = document.getElementById("dato").value;
    var output = "";

    for (let i = 1; i <= 10; i++) {
        output += numero + " x " + i + " = " + (numero * i) + "<br>";
    }
    document.getElementById("resultado").innerHTML = output;
}

//Leer dos numeros y realizar el producto mendiante sumas
function productoSum() {
    var var1 = parseInt(document.getElementById("dato1").value);
    var var2 = parseInt(document.getElementById("dato2").value);
    let producto = 0;
    for (let i = 0; i < var2; i++) {
        producto += var1;
    }
    document.getElementById('resultado').innerText = producto;
}

//Leer una secuencia de n numeros almacenarlos en un arreglo y mostrar la posicion donde se encuentran el mayor valor leido
function encontrarPosicionMaximo() {
    // Obtener la longitud de la secuencia desde el input
    let inputArray = document.getElementById('input').value;
    var secuencia = inputArray.split(',').map(Number);
    let n = secuencia.length;
    
    // Encontrar el máximo valor y su posición en la secuencia
    var maximo = secuencia[0];
    var posicionMaximo = 0;
    for (var j = 1; j < secuencia.length; j++) {
        if (secuencia[j] > maximo) {
            maximo = secuencia[j];
            posicionMaximo = j;
        }
    }
    
    // Mostrar la posición donde se encuentra el máximo valor
    document.getElementById('resultado').innerText = "El máximo valor leído es " + maximo + " y se encuentra en la posición " + (posicionMaximo + 1) + ".";
}

//Dado dos vectores A y B de n elementos cada uno, obtener un arreglo C donde la posicion i almacene la suma de A[i] + B[i]
function sumarVectores() {
    // Obtener la longitud de los vectores desde el input
    var n = parseInt(document.getElementById("longitudVectores").value);
    
    // Validar si la entrada es un número válido
    if (isNaN(n) || n <= 0) {
        document.getElementById('resultado').innerText = "Por favor, ingrese un número entero válido y positivo.";
        return;
    }
    
    // Inicializar los vectores A, B y el arreglo C
    var A = [];
    var B = [];
    var C = [];
    
    // Leer los elementos del vector A
    for (var i = 0; i < n; i++) {
        var elementoA = parseInt(prompt("Elemento " + (i + 1) + " de A:"));
        A.push(elementoA);
    }
    
    // Leer los elementos del vector B
    for (var j = 0; j < n; j++) {
        var elementoB = parseInt(prompt("Elemento " + (j + 1) + " de B:"));
        B.push(elementoB);
    }
    
    // Sumar los elementos de los vectores A y B y almacenarlos en el arreglo C
    for (var k = 0; k < n; k++) {
        C.push(A[k] + B[k]);
    }
    
    // Mostrar el arreglo C resultante en el HTML
    document.getElementById('resultado').innerText = "El arreglo C resultante es: " + C;
}


//Calcula la medida de una secuencia de numeros proporcionado por el usuario
function calcularMediaSecuencia() {
    let inputArray = document.getElementById('input').value;
    var numeros = inputArray.split(',').map(Number);

    if (numeros.length === 0) {
        return 0; // Retorna 0 si el arreglo está vacío para evitar divisiones por cero
    }

    // Sumar todos los números en el arreglo
    var suma = numeros.reduce(function(acumulador, numero) {
        return acumulador + numero;
    }, 0);

    // Calcular la media dividiendo la suma entre la cantidad de números
    var media = suma / numeros.length;

    
    // Mostrar la medida de la secuencia
    document.getElementById('resultado').innerText = 'La media es'+ media + ".";
}

//Guardar y ordenar numeros
function mostrarNumerosOrdenados() {
    let inputArray = document.getElementById('input').value;
    var numeros = inputArray.split(',').map(Number);
    
    // Ordenar los números en el arreglo de forma ascendente
    numeros.sort(function(a, b) {
        return a - b;
    });
    
    document.getElementById('resultado').innerText = "Los números en orden son: " + numeros;
}


//Dado una secuencia de textos proporcionados por el usuario, visualizar: la longitud, en mayusculas, en minusculas, cada uno de ellas
function visualizarTextos() {
    var secuencia = document.getElementById("inputTextos").value;
    var textos = secuencia.split(",");

    var resultado = "";

    textos.forEach(function(texto) {
        var longitud = texto.length;
        var mayusculas = texto.toUpperCase();
        var minusculas = texto.toLowerCase();

        resultado += "Texto: " + texto + "<br>";
        resultado += "Longitud: " + longitud + "<br>";
        resultado += "Mayúsculas: " + mayusculas + "<br>";
        resultado += "Minúsculas: " + minusculas + "<br>";
        resultado += "------------------------<br>";
    });

    document.getElementById('resultado').innerHTML = resultado;
}
