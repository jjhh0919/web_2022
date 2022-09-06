/*
never 타입
빈 배열 선언 시 never 타입
"noImplicitAny": false로 설정 시
*/
var array = [];
var head = document.querySelector("#head");
var a = "world";
var b = "hello ".concat(a);
var c = "Hello world";
// rest 파라미터
function rest() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
}
// 튜플
var tuple = ["1", 2];
tuple.push(3); // tuple[2] = 3은 에러가 나지만 push는 에러가 나지 않음
var Move2 = {
    Up: 0,
    Down: 1,
    Right: 2,
    Left: 3
}; // as const : readonly + 값 고정
// enum 버전
function walk1(dir) { }
function walk2(dir) { }
walk1(0 /* Move1.Up */);
walk2(Move2.Up);
