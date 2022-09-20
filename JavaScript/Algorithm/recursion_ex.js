// Power   Math.pow() 재귀
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// Factorial
function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

// 배열의 모든 값 곱
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

// 0부터 num까지의 합
function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

// FIBONACCI(피보나치)
function fibonacci(num) {
  if (num <= 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
