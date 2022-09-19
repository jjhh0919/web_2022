// 재귀 : 자기자신을 호출하는 절차

/*
The Call Stack
함수를 호출하면, 호출 스택의 제일 위에 쌓인다.
반환 키워드를 확인하거나, 함수 안에 더이상 실행할 코드가 없으면 스택의 제일 위에 있는 항목을 제거한다.
*/

// 재귀함수 기본 1 : 종료 조건(무한 루프 X)
// 재귀함수 기본 1 : 다른 입력값

// 카운트다운 ver루프
function countDown1(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
}
countDown1(5);

// 카운트다운 ver재귀
function countDown2(num) {
  if (num > 0) {
    console.log(num);
    num--;
    countDown2(num);
  }
}
countDown2(5);

// 팩토리얼 ver루프
function factorial1(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}
factorial1(5);

// 팩토리얼 ver재귀
function factorial2(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial2(num - 1);
}
factorial2(5);

/*
주의할 점
1. 종료 조건
2. 반환(return)
3. Stack Overflow
*/
