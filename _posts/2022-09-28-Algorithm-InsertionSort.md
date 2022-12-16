---
layout: post
title: Insertion Sort
date: 2022-09-28
category: Algorithm
image: assets/img/blog/JavaScript.png
author: 문준혁
tags: study
---

### 삽입 정렬

* 한번에 하나의 항목을 알맞은 위치에 삽입해서 점차 배열을 구축

```
function insertionSort(arr) {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
```

* 시간복잡도 : O(n²)
* Best : O(n)