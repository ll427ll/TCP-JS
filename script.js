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