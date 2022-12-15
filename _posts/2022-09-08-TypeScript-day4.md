---
layout: post
title: Day4
date: 2022-09-08
category: TypeScript
image: assets/img/blog/TypeScript.png
author: 문준혁
tags: study
---

Day4 - void, any, unknown

### 잉여 속성 검사

```
type E = { a: string };
const obj1 = { a: "hello", b: "world" };
const obj2: E = obj1;
```

### void

* 리턴값이 없거나 undefined(리턴값이 있어도 상관 X)
* 매개변수가 void(리턴값이 있어도 상관 X)
* 메서드가 void

```
function abc(): void {
  return undefined;
}
```

### any와 unknown

* 둘 다 없는 것이 좋은 편 
* any를 안 쓰는 이유 : any를 쓰면 타입스크립트는 타입 검사를 안함 
* unknown : 타입을 잘 모를 때 사용하고 후에 자신이 사용할 때 타입을 정함 
* any는 타입 검사 포기, unknown은 타입 검사 미루기