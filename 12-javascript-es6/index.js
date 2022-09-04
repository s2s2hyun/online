// ######## 변수
// 변수 선언
// ex) let 변수명 ; -> 빈 변수 변수값이 없는것
//     let 변수명 = 변수값 ;

// 예시)
// console.log() 출력값은 node로 index.js 파일을 실행시키면 볼수있다.
let testValue;
testValue = 1;
console.log(testValue);
// 출력 1
testValue = 2;
console.log(testValue);
// 출력 2

// - 한번 선언한 변수를 다시 선언할 수는 없다.

// ######### 상수 선언
// - 한번 상수로 선언된 변수에는 새로운 값을 넣을 수 없음
// - 선언할 때 , 특정 상수값 까지 넣어서 선언해야함
// - ! 상수라고 반드시 정수만 되는것은 아니다.

// const testValue = 2
// const testValue = 'test'
// const testValue = '' 일종의 null 을 나타내는 값을 넣을수 있음

// ##### ES6 화살표 함수 (Arrow function "=>") 선언
// - 함수 선언을 보다 간단하게 하기 위해 고안된 문법
// - 화살표 함수는 익명 함수임
// -> 따라서 , 익명 함수를 호출하기 위해, 변수에 대입하는 경우가 많음

// ex)

// let func = (함수인자) => expression
// let func = (함수인자) => {statements}

// 위 일반적인 화살표 함수 문법은 다음 함수 선언과 동일함

// let func = function (함수인자) {
//     return expression;
// };

// - 다음과 같은 세가지 단축 문법 지원

//     - function 키워드 생략 가능
//     - 함수 인자가 하나 뿐이면 ,괄호() 생략 가능
//     - 함수 코드가 한 라인이라면 ,코드 블록 기호(중괄호) 및 return 키워드 생략 가능

//     예시 코드를 좀더 만들어보자 두 함수 선언은 동일한 선언이다.
// ex1)
// let f1 = function () {
//     return "hello world!";
// };

// let f1 = () => "hello world!";

// =================================
//   ex2) 두 함수 선언은 동일한 선언이다.
// let f2 = function (age) {
//     return age * 2;
// };

// let f2 = (age) => age * 2;
