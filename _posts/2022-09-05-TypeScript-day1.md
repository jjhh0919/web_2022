---
layout: post
title: Day1
date: 2022-09-05
category: TypeScript
image: assets/img/blog/TypeScript.png
author: 문준혁
tags: study
---

Day1 - 기본 문법_타입(변수)

* 타입스크립트는 알아서 타입을 추론
* 추론이 잘못되지 않았다면 굳이 타입을 지정하지 않기

```
const str: string = "string";
const num: number = 123;
const bool: boolean = true;
const und: undefined = undefined;
const nul: null = null;
const any: any = "any";
```

### any

* any : 어떤 타입이든 가능 
* any를 사용한다면 타입스크립트가 아닌 자바스크립트를 사용하는 것과 마찬가지 
* 왠만하면 사용 X

### 함수

```
function addNum1(num1: number, num2: number): number {
  return num1 + num2;
}

const addNum2: (num1: number, num2: number) => number = (num1, num2) =>
  num1 + num2;
  
/*
(num1: number, num2: number) => number 부분은 타입 자리 아래 방법과 같음

type Add = (num1: number, num2: number) => number;
const addNum2: Add = (num1, num2) => num1 + num2;
*/

interface Add {
  (x: number, y: number): number;
}
const addNum3: Add = (num1, num2) => num1 + num2;
```

### 배열
```
const arr: string[] = ["str1", "str2"];
const arr2: [number, string, number] = [1, "2", 3]; //튜플(길이 고정)
```

### 객체
```
const obj: { key1: string; key2: string } = { key1: "키1", key2: "키2" };
```
