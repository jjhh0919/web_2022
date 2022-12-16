---
layout: post
title: Navie String Search
date: 2022-09-23
category: Algorithm
image: assets/img/blog/JavaScript.png
author: 문준혁
tags: study
---

### Naive String Search

* 긴 문자열 안에 특정(짧은) 문자열을 검색

```
function naiveStringSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
    if (j === short.length - 1) count++;
    }
  }
  return count;
}
```