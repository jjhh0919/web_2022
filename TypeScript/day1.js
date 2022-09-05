/*
타입스크립트는 알아서 타입을 추론하기 때문에
추론이 잘못되지 않았다면
굳이 타입을 지정하지 않기
*/
//변수
var str = "string";
var num = 123;
var bool = true;
var und = undefined;
var nul = null;
var any = "any";
/*
any : 어떤 타입이든 가능
any를 사용한다면 타입스크립트가 아닌 자바스크립트를 사용하는 것과 마찬가지
왠만하면 사용 X
*/
// 함수
function addNum1(num1, num2) {
    return num1 + num2;
}
var addNum2 = function (num1, num2) {
    return num1 + num2;
};
var addNum3 = function (num1, num2) { return num1 + num2; };
// 배열
var arr = ["str1", "str2"];
var arr2 = [1, "2", 3]; //튜플(길이 고정)
// 객체
var obj = { key1: "키1", key2: "키2" };
