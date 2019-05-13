
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [
    [],
    [],
    []
]
var num1 = 0;
var num2 = 0;
for (var i = 0; i < 3; i++){
    num1 = i;
    for(var j = 0; j < 3; j++){
        num2 = j;
        matriz[i][j] = num1.toString()+ num2.toString();
    }
}

console.log(matriz);