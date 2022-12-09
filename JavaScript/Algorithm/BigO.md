# BigO

---

### BigO - 시간복잡도

* 같은 문제라도 많은 접근 방법이 존재
* 여러가지 코드를 서로 비교하고 성능을 평가하는 방법
* 속도와 가독성을 잘 조율하는 것이 중요
* 실제 속도를 측정하는 것이 아닌 연산 갯수를 측정

### 공간복잡도

* 얼마나 많은 공간(사용 메모리)을 차지하는지 측정
* 원시형(boolean, number, undefined, nu ll)은 불변 공간
* 문자열은 O(n)
* 참조형(배열, 객체)은 O(n)

```
// 더하기 방법 1(가독성)
// 더하기 2n, 할당 2n+2, 비교 n => O(n)
function sum1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// 더하기 방법 2(속도)
// 곱하기 1, 더하기 1, 나누기 1 => O(1)
function sum2(n) {
  return (n * (n + 1)) / 2;
}

// 2차원 배열
// 반복문 2 => O(n²)
function arrayTwo(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```