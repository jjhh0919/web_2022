var obj1 = { a: "hello", b: "world" };
var obj2 = obj1;
/*
void
1. 리턴값이 없거나 undefined
2. 매개변수가 void
3. 메서드가 void
2, 3은 리턴값이 있어도 상관 X
*/
function abc() {
  return undefined;
}
/*
any와 unknown
둘 다 없는 것이 좋은 편
any를 안 쓰는 이유 : any를 쓰면 타입스크립트는 타입 검사를 안함
unknown : 타입을 잘 모를 때 사용하고 후에 자신이 사용할 때 타입을 정함
*/
