---
layout: post
title: Day5
date: 2022-09-09
category: TypeScript
image: assets/img/blog/TypeScript.png
author: 문준혁
tags: study
---

Day5 - 타입 좁히기

### 타입 좁히기

```
function numOrStr(a: number | string) {
  if (typeof a === "number") {
    console.log(`${a} : number}`);
  } else {
    console.log(`${a} : string`);
  }
}
```

### 타입 좁히기(배열)

```
function numOrNumarr(a: number | number[]) {
  if (Array.isArray(a)) {
    console.log(`${a} : array`);
  } else {
    console.log(`${a} : number`);
  }
}
```

### 타입 좁히기(클래스)

```
class AA {
  a() {}
}
class BB {
  b() {}
}

function aaOrBb(param: AA | BB) {
  if (param instanceof AA) {
    param.a();
  } else {
    param.b();
  }
}
```

### 타입 체크

* 객체를 선언할 때 type 속성을 추가하면 좋을수도 있음

```
// type을 통해 체크
if (객체.type === '타입'){
}

// 속성을 통해 체크
if ('속성' in 객체){
}
```