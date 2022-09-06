// function 함수이름 (함수인자) {
// 함수실행코드
// }

// function StudyCoding(name) {
//     console.log("Hi," + name + "!");
// }

// StudyCoding(`fun-coding`);
// 출력 Hi,fun-coding!

// return 키워드 사용

function StudyCoding(name) {
    return `Hi, ` + name + "!";
}

StudyCoding(`fun-coding`);
// 출력 'Hi, fun-coding!'

// ES6 화살표 함수 (Arrow function , '=>') 선언
- 함수 선언을 보다 간단하게 하기 위해 고안된 문법
- 화살표 함수는 익명 함수임 
    따라서 익명 함수를 호출하기 위해 변수에 대입하는 경우가 많음

ex ) 
let func  = (함수인자 ) => expression 
let func = (함수인자) => {statement}

// 위 일반적 화살표 함수 문법은 다음 함수 선언과 동일함

let func = function (함수인자) {
    return expression
}

예시 ) 다음 두 함수 선언은 동일한 선언임
let f1 = function () {
    return "hello world"
}

let f1 = () => "hello world"