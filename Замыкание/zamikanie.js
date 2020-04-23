// const mathModules = function () {
//   function sum(a, b) {
//     return a + b;
//   }
//   function multiply(a, b) {
//     return a * b;
//   }
//   function substract(a, b) {
//     return a - b;
//   }
//   function divide(a, b) {
//     return a - b;
//   }
//   function power(a, b) {
//     var otvet = 1;
//     for (i = 0; i < b; i++) {
//     otvet *= a;
//     }
//     return otvet;
//   }
//
//   return {
//     sum : sum,
//     multiply: multiply,
//     divide: divide,
//     substract: substract,
//     power: power
//   }
// }()


// const arrayFunctions = function() {
//
//   function min (arr) {
//     let min = arr[0];
//
//     for (let i = 0; i < arr.length; i++) {
//
//       if (min > arr[i]) {
//         min = arr[i];
//       }
//
//     }
//     return min;
//   }
//
//   function max (arr) {
//     let max = arr[0];
//
//     for (let i = 0; i < arr.length; i++) {
//
//       if (max < arr[i]) {
//         max = arr[i];
//       }
//
//     }
//     return max;
//   }
//   function sum (arr) {
//     let summa = 0;
//     for (let i = 0; i < arr.length; i++) {
//       summa += arr[i];
//     }
//     return summa;
//   }
//
//   function multiply (arr) {
//     let otvet = 1;
//     for (let i = 0; i < arr.length; i++) {
//       otvet *= arr[i];
//     }
//     return otvet;
//   }
//
//   function sredneeArif (arr) {
//     let otvet = sum(arr) / arr.length;
//     return otvet;
//   }
//
//   return {
//     min : min,
//     max : max,
//     multiply : multiply,
//     sredneeArif : sredneeArif
//   }
// }()

// const robot = function () {
//   let shagi = 0;
//   var arr = [];
//   function vpered () {
//     shagi++;
//     arr.push("vpered")
//     return shagi;
//   }
//   function nazad () {
//     shagi++;
//     arr.push("nazad")
//     return shagi;
//   }
//   function napravo () {
//     shagi++;
//     arr.push("napravo")
//     return shagi;
//   }
//   function nalevo () {
//     shagi++;
//     arr.push("nalevo")
//     return shagi;
//   }
//   function put () {
//     document.write(arr)
//     return arr;
//   }
//
//   return {
//     vpered : vpered,
//     nazad: nazad,
//     nalevo: nalevo,
//     napravo: napravo,
//     put : put
//   }
// }()
