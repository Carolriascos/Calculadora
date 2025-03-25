 // Capturar el formulario
 const formulario = document.getElementById('formulario');

 // Escuchar el evento "submit" del formulario
 formulario.addEventListener('submit', function (event) {
     event.preventDefault(); // Evitar que el formulario se envíe
 
     // Obtener los valores del formulario
     const operador1 = parseInt(document.getElementById('op1').value);
     const operador = document.getElementById('operador').value;
     const operador2 = parseInt(document.getElementById('op2').value);
 
   
     // Concatenar el texto

     let textoFinal =  "Resultado: " +  calcular(operador1, operador2, operador); 
     // Mostrar el resultado en el HTML
     document.getElementById('resultado').textContent = textoFinal;
 });

 
function calcular(operador1, operador2, operador) {
    let resultado = 0
    if (operador == "+") {
        resultado = operador1 + operador2;
    }

    else if (operador == "-") {
        resultado = operador1 - operador2;
    }


    else if (operador == "*") {
        resultado = operador1 * operador2;
    }

    else if (operador == "/") {
        resultado = operador1 / operador2;

        if(operador == "/" && operador2 == 0){
            resultado = "ERROR: ¡No se puede dividir por cero!";
            
        }
    }

 
 
    else if (operador == "**") {
        resultado = operador1 ** operador2;
        
    }

    else if (operador == "%") {
        resultado = operador1 % operador2;

        
    }

    else { 
       resultado = "ERROR: Operador No Válido !"
    }
    console.log(operador1)
    console.log(operador2)
    console.log(resultado)
    return resultado;
}