// 날짜 표기할때
// 자바문법 기반으로 자바스크립트 로 만들었다.
// 1. new Date() 형식 올드함

// var date = new Date();
// console.log(date)
// 요즘은 잘 쓰지 않는 시간 형식이 담겨져있다.
// console.log(date.toISOString()) 을 사용해서 보기 편하게 한다.

// 2. 날짜 포맷 변경하려면 귀찮다.
// var a = `${date.getFullYear()} 년
//         ${date.getMonth()}월
//         ${date.getDate()}일 입니다. `;
// 자바스크립트 현재 월에서 출력해서 보면 현재가 9월인데 console.값에는 8월로 표기가 된다 . 그래서
// ${date.getMonth() + 1 }월 로 수정해줘야한다.

// 날짜를 다루는 Js 문법이 있다.
// 1. Intl 쓰면 날짜 포맷팅이 쉬움
// var date = new Date();
// var a = new Intl.DateTimeFormat('kr').format(date);
// 한국 스타일 시간으로 잘 쓰여져 있다.
// 다국어 날짜 표기할때도 매우 좋다.
// 시간 까지 표기 하고싶다면
var a = new Intl.DateTimeFormat("kr", { dateStyle: "full", timeStyle: "full" }).format(date);
// 시간과 날짜까지 전부 표기가 되어 보기 편하다. 다국어 까지 지원가능하니 참고

// 2.Intl 쓰면 시간차 쉽게 표현도 가능하다.
// SNS 에서 보면 몇시간 전 이런거 게시글 표현 구현하고싶다면
// var a = new Intl.RelativeTimeFormat().format()
// ex)
// var a = new Intl.RelativeTimeFormat().format(-n,'days') = -n 일 전 days / month 달까지 사용이 가능하다.
var date = new Date();
console.log(date);
