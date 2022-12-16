---
layout: post
title: 재귀
date: 2022-09-20
category: Algorithm
image: assets/img/blog/JavaScript.png
author: 문준혁
tags: study
---

### 재귀 : 자기자신을 호출하는 절차

* The Call Stack
* 함수를 호출하면, 호출 스택의 제일 위에 쌓임
* 반환 키워드를 확인하거나, 함수 안에 더이상 실행할 코드가 없으면 스택의 제일 위에 있는 항목을 제거 
* 재귀함수 기본 : 종료 조건(무한 루프 X), 다른 입력값

```
// 카운트다운 ver루프
function countDown1(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
}
countDown1(5);

// 카운트다운 ver재귀
function countDown2(num) {
  if (num > 0) {
    console.log(num);
    num--;
    countDown2(num);
  }
}
countDown2(5);

// 팩토리얼 ver루프
function factorial1(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}
factorial1(5);

// 팩토리얼 ver재귀
function factorial2(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial2(num - 1);
}
factorial2(5);
```

#### 주의할 점

1. 종료 조건
2. 반환(return)
3. Stack Overflow

### 재귀 예
```
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
```