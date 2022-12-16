---
layout: post
title: 문제 해결 패턴
date: 2022-09-16
category: Algorithm
image: assets/img/blog/JavaScript.png
author: 문준혁
tags: study
---

### Frequency Counter

* 첫번째 파라미터 배열 -> 각각 제곱 -> 두번째 파라미터 배열 

```
same([1, 2, 3], [4, 1, 9]) // true 
same([1, 2, 3], [1, 9]) // false 
same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)
```

```
// O(n²)
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2) // nested loops
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
```

```
// O(n)
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (key ** 2 in frequencyCounter2) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
```

* 보통 객체를 사용 
* 두 개의 배열을 객체로 세분화하여 각 배열의 요소들을 분류하고 비교

### Multiple Pointers

* 인덱스나 위치에 해당하는 포인터나 값을 만든 다음 특정 조건에 따라 중간 지점에서부터 시작 지점이나 끝 지점이나 양쪽 지점을 향해 이동시키는 것

```
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
```

```
// O(n²)
function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
```

```
// O(n)
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
```