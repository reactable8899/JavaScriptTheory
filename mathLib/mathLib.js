let mathLib = function() {

    function sum(a, b) {
      return a + b;
    }
    function multiply(a, b) {
      return a * b;
    }
    function substract(a, b) {
      return a - b;
    }
    function divide(a, b) {
      return a / b;
    }
    function power(a, b) {
      var otvet = 1;
      for (i = 0; i < b; i++) {
      otvet *= a;
      }
      return otvet;
    }

    function min (arr) {
      let min = arr[0];

      for (let i = 0; i < arr.length; i++) {

        if (min > arr[i]) {
          min = arr[i];
        }

      }
      return min;
    }

    function max (arr) {
      let max = arr[0];

      for (let i = 0; i < arr.length; i++) {

        if (max < arr[i]) {
          max = arr[i];
        }

      }
      return max;
    }

    function sum (arr) {
      let summa = 0;

      for (let i = 0; i < arr.length; i++) {
        summa += arr[i];
      }

      return summa;
    }

    function compact(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined || arr[i] === 0 || arr[i] === null || arr[i] === "") {
          arr.splice(i,1)
          i -= 1;
        }
      }
      return arr;
    }

    function factorial (arr) {
      let otvet = 1;

      for (let i = 0; i < arr.length; i++) {
        otvet *= arr[i];
      }

      return otvet;
    }

    function average (arr) {
      let result = sum(arr) / arr.length;
      return result;
    }

    function firstofArray(arr,num) {
      for (var i = 0; i <= num; i++) {
        var mas = arr.slice(0,num);
      }
      return mas
    }

    function pull (arr,number) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
        arr.splice(i,1);
        i -= 1;
        }
      }
      return arr
    }

    function range (start, end, step) {
      var arr = [];
      for (var i = start; i < end; i += step) {
        arr.push(i)
      }
      return arr;
    }

    function rest (arr,number) {
      let result = arr.splice(number,arr.length)
      return result;
    }

    function sortBy(arr) {
      var temp = 0;
      for (var i = 1; i < arr.length; i++) {
        for (var j = 0; j <= arr.length - i; j++) {
          if (arr[j - 1] > arr[j]) {
            temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
          }
        }
      }
      return arr;
    }

    function concat(arr1,arr2) {
      var arr = [];
      for (var i = 0; i < arr1.length; i++) {
        arr.push(arr1[i])
      }
      for (var i = 0; i < arr2.length; i++) {
        arr.push(arr2[i])
      }
      return arr
    }

    function reverse (arr) {
      var arr2 = [];
      for (var i = arr.length - 1; i >= 0; i--) {
        arr2.push(arr[i])
      }
      return arr2;
    }

    return {
      power: power,
      reverse: reverse,
      concat: concat,
      sortBy: sortBy,
      range: range,
      rest: rest,
      pull: pull,
      firstofArray: firstofArray,
      compact: compact,
      min: min,
      max: max,
      factorial: factorial,
      average: average
    }
}()

module.exports = mathLib;
