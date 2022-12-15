---
layout: post
title: Day3
date: 2022-09-07
category: TypeScript
image: assets/img/blog/TypeScript.png
author: 문준혁
tags: study
---

Day3 - 타입, 인터페이스(상속)

### Union(or)

```
type Num = {
  num1: string | number;
  num2: string | number;
};
```

### Intersection(and)

```
type Name = { first: "이름" } & { last: "성" };
const fullName: Name = { first: "이름", last: "성" };
```

* 타입 : 간단히
* 인터페이스 : 객체지향 
* 대부분 인터페이스 사용

### 타입(상속의 개념)

```
type Animal1 = { animal: true };
type Person1 = Animal1 & { person: true };
type Male1 = Person1 & { male: true };

const me1: Male1 = { male: true, person: true, animal: true };
```

### 인터페이스(상속)

```
interface Animal2 {
animal: true;
}
interface Person2 extends Animal2 {
person: true;
}
interface Male2 extends Person2 {
male: true;
}

const me2: Male2 = { male: true, person: true, animal: true };
```

### 넓은 타입, 좁은 타입

```
type A = string | number; // 넓은 타입
type B = string; // 좁은 타입

type C = { c: string }; // 넓은 타입
type D = { d: number }; // 넓은 타입
type CD = { c: string; d: number }; // 좁은 타입
```