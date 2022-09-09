// 타입 좁히기
function numOrStr(a) {
    if (typeof a === "number") {
        console.log("".concat(a, " : number}"));
    }
    else {
        console.log("".concat(a, " : string"));
    }
}
// 타입 좁히기(배열)
function numOrNumarr(a) {
    if (Array.isArray(a)) {
        console.log("".concat(a, " : array"));
    }
    else {
        console.log("".concat(a, " : number"));
    }
}
// 타입 좁히기(클래스)
var AA = /** @class */ (function () {
    function AA() {
    }
    AA.prototype.a = function () { };
    return AA;
}());
var BB = /** @class */ (function () {
    function BB() {
    }
    BB.prototype.b = function () { };
    return BB;
}());
function aaOrBb(param) {
    if (param instanceof AA) {
        param.a();
    }
    else {
        param.b();
    }
}
/*
타입 체크
객체를 선언할 때 type 속성을 추가하면 좋을수도 있음

type을 통해 체크
if (객체.type === '타입'){
  
}

속성을 통해 체크
if ('속성' in 객체){

}
*/
