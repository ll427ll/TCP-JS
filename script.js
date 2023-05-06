var x = 10;
var result = x + 3;

var javascript = 10;
var JavaScript = 20;
var Script = 30; // 변수의 선언은 var 키워드로만 할 수 있으면 Var는 동작하지 않음.

12; // 숫자 리터럴
("JavaScript"); // 문자열 리터럴
("안녕하세요"); // 문자열 리터럴
true; // 불리언 리터럴

var firstVar = 10; // Camel Case
function my_first_func() {
  // Underscore Case 방식
  var firstLocal = 20; // Camel Case 방식
}

var firstVar = 10; // var는 변수의 정의를 위해 예약된 키워드 입니다.
function myFirstFunc() {
  // function은 함수의 정의를 위해 예약된 키워드입니다.
}
var secondVar = 20; // var는 변수의 정의를 위해 예약된 키워드입니다.

// 한 줄 주석
/* 여러 줄 주석 */
var x = 10;
// var y = 20; 한 줄의 주석문 : 이 부분은 실행되지 않을 것입니다.
/*
x = x + y;
여러 줄의 주석문 :
이 부분 또한 실행되지 않을 것입니다.
 */
document.getElementById("text").innerHTML = x;

/* 여러 줄
    // 이렇게 두 줄 주석 안에 또 다른 한 줄 주석을 삽입할 수 있습니다.
주석입니다. */

//script
function alerDialogBox() {
  alert("확인을 누를 때까지 다른 작업을 할 수 없어요!");
}

//script
var str = document.getElementById("text");
str.innerHTML = "이 문장으로 바뀌었습니다!!";

//script
document.write(4*5);

//script
document.getElementById("text").innerHTML = "여러분들을 환영합니다!";

//script
function printDate() {
    document.getElementById("date").innerHTML = Date();
}

//script
function printDate() {
    document.getElementById("date").innerHTML = Date();
}

function printDate() {
    document.getElementById("date").innerHTML = Date();
}

var nun = 10; // 숫자
var myName = "홍길동"; // 문자열
var str; // undefined

var firstNum = 10; // 소숫점을 사용하지 않은 표현
var secondNum = 10.00; // 소숫점을 사용한 표현
var thirdNum = 10e6; // 1000000
var fourthNum = 10e-6 // 0.00001

var firstNum = "이것도 문자열입니다."; // 큰따옴표를 사용한 문자
var secondNum = '이것도 문자열입니다.'; // 작은따옴표를 사용한 문자열
var thirdNum = "나의 이름은 '홍길동'이야." // 작은따옴표는 큰따옴표로 둘러싸인 문자열에만 포함될 수 있음.
var fourthNum = '나의 이름은 "홍길동"이야.' // 큰따옴표는 작은 따옴표로 둘러싸인 문자열에만 포함될 수 있음.
var num = 10;
var str = "Java Script";
document.getElementById("result").innerHTML = (num + str); // 10JavaScript

var firstNum = 10;
var secondNum = 11;
document.getElementById("result").innerHTML = (firstNum == secondNum); // false

var sym = Symbol("javascript"); // symbol 타입
var symObj = Object(sym); // object 타입

typeof 10; // number 타입
typeof "문자열"; // string 타입
typeof true; // boolean 타입
typeof undefined; // undefined 타입
typeof null; // object 타입

var num; // 초기화하지 않았으므로 undefined 값을 반환함.
var str = null; // object 타입의 null 값
typeof secondNum; // 정의되지 않은 변수에 접근하면 undefined 값을 반환함.
null == undefined; // true
null === undefined; // false

var dog = { name:"해피", age:3 }; // 객체의 생성
// 객체의 프로퍼티 참조
document.getElementById("result").innerHTML = "강아지의 이름은" + dog.name + "이고, 나이는" + dog.age + "살 입니다.";

var num = 20; // Number 타입의 20
num = "이십"; // String 타입의 "이십"
var num;  // 한 변수에 여러 번 대입할 수는 있지만, 변수의 재선언은 할 수 없습니다. 재선언문은 무시됩니다.

10 + "문자열"; // 문자열 연결을 위해 숫자 10이 문자열로 변함됨.
"3"*"5"; // 곱셈 연상을 위해 두 문자열이 모두 숫자로 변환됨.
1 - "문자열"; // NaN

Number("10"); // 숫자 10
String(true); // 문자열 "true"
Boolean(0); // 불리언 false
Object(3); // new Number(3)와 동일한 결과로 숫자 3

String(true); // 문자열 "true"
false.toString(); // 문자열"false"

