console.log("hola mundo!"); // Ejercicio 1


alert("Me llamo Diego!"); // Ejercicio 2

var nombre = "Diego"; // Ejercicio 3
var apellido = "Fernandez";
console.log(nombre, apellido);

var numero1 = 5; // Ejercicio 4
var numero2 = 7;
var NumerosSumados = numero1+numero2;
console.log("La suma de "+ numero1 + " mas "+ numero2 + " da un total de " + NumerosSumados);

var NotaExamen = 5; //Ejercicio 5
if (NotaExamen>=5){
    console.log ("Tu nota de examen es "+ NotaExamen+ ". Estas Aprobado!!")
}   
else {
    console.log ("Tu nota de examen es "+ NotaExamen+ ". Estas Suspendido!!")
}

var ColorCoche = "Tengo un coche de color azul"; // Ejercicio 6
var Verde = ColorCoche.replace("azul", "verde");
console.log(Verde);
var ReemplazoLetras = ColorCoche.replace(/o/g, "u");
console.log(ReemplazoLetras);

var lista = ["taula", "cadira", "ordinador", "llibreta"]; // Ejercicio 7
for (i=0; i<lista.length; i++){
console.log(lista[i] + " es "+ i);
}

function calculadora (operador, valor1, valor2) { // Ejercicio 8
    if (operador == "suma"){
        console.log("La suma de "+valor1+ " mas "+valor2 + " es "+ valor1+valor2);
    }
    if (operador == "resta"){
        console.log("La resta de "+valor1+ " menos "+valor2 + " es "+ (valor1-valor2))
    }
    if (operador == "multiplicacion"){
        console.log("La multiplicacion de "+valor1+ " por "+valor2 + " es "+ valor1*valor2);
    }
}
var resultado = calculadora("suma", 5, 4);
var resultado = calculadora("resta", 30, 24);
var resultado = calculadora("multiplicacion", 5, 4);





