---
layout: post
title: Radix Sort
date: 2022-10-03
category: Algorithm
image: assets/img/blog/JavaScript.png
author: 문준혁
tags: study
---

### 기수 정렬

* 비교 알고리즘이 아닌 정렬 알고리즘 
* 데이터는 숫자여야 함 
* 숫자의 자릿수를 통해 정렬 
* 일의 자리 값으로 묶음 => 목록 재구성 => 십의 자리 값으로 묶음 => 목록 재구성 => (가장 큰 수의 자릿수까지 반복)

```
// 자릿수 알아내기
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// 자릿수 계산
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// 자릿수가 가장 많은 수 찾기
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// 기수 정렬
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
```

* 시간복잡도 : O(nk)
* 공간복잡도 : O(n+k)