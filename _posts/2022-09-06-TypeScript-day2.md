---
layout: post
title: Day2
date: 2022-09-06
category: TypeScript
image: assets/img/blog/TypeScript.png
author: 문준혁
tags: study
---

Day2 - 기본 문법_타입, enum

### never 타입

* 빈 배열 선언 시 never 타입
* "noImplicitAny": false로 설정 시

```
const array = [];

const head = document.querySelector("#head")!;
```

* 원래 head는 Element 또는 null 타입을 가질 수 있지만 뒤에 !를 붙이면 Element 타입만 가지게 됨 
* 하지만 사용안하는 것이 좋음

```
type World = "world";
const a: World = "world";
const b = `hello ${a}`;

type Greeting = `Hello ${World}`;
const c: Greeting = `Hello world`;
```

### rest 파라미터

```
function rest(...args: string[]) {
  console.log(args);
}
```

### 튜플

```
const tuple: [string, number] = ["1", 2];
tuple.push(3); // tuple[2] = 3은 에러가 나지만 push는 에러가 나지 않음
```

### enum

* 변수들을 하나의 그룹으로 묶고 싶을 때
* 컴파일 시 enum은 사라지고 객체는 남음

```
const enum Move1 {
  Up, // 0
  Down, // 1
  Right, // 2
  Left, // 3
}

const Move2 = {
  Up: 0,
  Down: 1,
  Right: 2,
  Left: 3,
} as const; // as const : readonly + 값 고정

// enum 버전
function walk1(dir: Move1) {}

// 객체 버전
type Direction = typeof Move2[keyof typeof Move2];
function walk2(dir: Direction) {}

walk1(Move1.Up);
walk2(Move2.Up);
```