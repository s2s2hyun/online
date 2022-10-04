//  # 14. Js

//  ※ Class 컴포넌트 와 함수형 컴포넌트 에 대한 비교와 생명주기까지 내용정리

// 1. Class 란?
// class 는 객체이자 물건 만드는 설명서 이다.
// class 안에는 함수와 변수를 넣을 수 있습니다. 이 변수와 함수를 조합해 예시로 붕어빵과 몬스터를 만드는 방법을 적어둘수 있습니다.
// 그리고 붕어빵과 몬스터를 만들고 싶다면 new 붕어빵() 으로 만들어 줍니다.
// 만들어진 붕어빵과 몬터스는 객체 또는 인스턴스라고 부릅니다.

// ex) class 붕어빵 { // 만드는방법 } => new 붕어빵()

// 1 - 1 클래스에서 함수와 변수 사용법

// 클래스에서 함수와 변수를 사용할땐 function , let , const 를 붙이지 않습니다.

// class {
//     // class에서의 함수 작성
//         sayHi(){
//             console.log("안녕하세요")
//     }

//     // class에서의 변수 작성
//         sayHi = "안녕하세요"
// }

// 클래스에서 만들어진 함수를 메소드 라고 부릅니다.

// 1 - 2 클래스에서의 상속
// 클래스에서는 공통 기능을 extends 를 통해 상속 해줄 수 있습니다.

// 예시

// 지상 몬스터와 공중 몬스터 만들기
// 공통기능
// basicFunc{
//     hp = 100
//     attack(){
//         console.log("공격을 시도 했습니다.")
//     }
// }

// //지상 몬스터의 피하기
// groundMonster extends basicFunc{
//     avoid() {
//         console.log("지상에서 뛰어서 피했습니다.")
//     }
// }

// // 공중 몬스터 피하기
// flyMonster extends basicFunc{
//     avoid(){
//         console.log("공중으로 날아 피했습니다.")
//     }
// }

// 1 - 3 class component 만들어보기 실습
// count 컴포넌트를 만들어보겠습니다.
import { component, useEffect } from "react";

export default class ClassCounterPage extends Component {
    // class 변수의 선언 방식

    state = {
        count: 0,
    };

    // class 에서의 함수 사용방식

    onClickCounter = () => {
        console.log(this.state.count);
        this.setState((prev) => ({
            count: this.state.count(prev.count) + 1,
        }));
    };
    // 화면이 그려지는 부분
    render() {
        return (
            <div>
                {/* this는 class 자기 자신을 뜻합니다. */}
                {this.state.count}

                {/* // 직접 바인딩 하실때는 onClick={this.onClickCounter.bind(this)} 라고 적어주셔야합니다. */}
                <button onClick={this.onClickCounter}>카운트 올리기</button>
            </div>
        );
    }
}

// 1 - 4 위에 봤던 this 바인딩 (.bind(this))

// this 는 어디서 실행하냐 따라서 변화하는 이슈가 있습니다. 즉 , 실행하는 주체에 따라서 this 가 다르게 나옵니다.
// 이렇게 바뀌는 this 를 동적 this 라고 합니다.
// 따라서 onClickCounter를 클릭시에 this 가 onClickCounter로 바뀌게 됩니다.
// 변화하는 this 를 class 로 고정하기 위해서는 this 를 바인딩 해주거나 화살표 함수를 써줘야합니다.
// 이렇게 바인딩 과정을 거쳐서 고정된 this 를 렉시컬 this 라고 합니다.

// 1 - 5 Class 컴포넌트의 생명주기 (Life Cycle)

// 컴포넌트의 생명주기는 컴포넌트가 브라우저에 나타나고 업데이트 되고 , 사라지게 될 때 호출되는 메서드 입니다.
// 쉽게 말해 , 특정 시점에 코드가 실행되도록 설정할 수 있다는 것입니다.
// 메서드에 대해 간략히 요약한다면 ,
// 1. 그리기 -> render 인풋창 그리기
// 2. 그리고 난 뒤 -> componentDidMount 포커스 깜빡 깜빡 하기
// 3. 그리고 난 뒤 변경 -> componentDidUpdate
// 4. 그리고 난 뒤 사라짐 -> componentWillmount

// class 컴포넌트의 생명주기
// import {Component} from 'react'
// import Router from 'react'

// export default class ClassCounterPage  extends Component{
// 		state = {
// 					count : 0,
// 				}

// //라이프사이클 메서드
// componentDidMout(){
// 		console.log("마운트 됨")
// 		//input태그 선택해서 포커스 깜빡거리게 하기
// 	}
// componentDidUpdate(){
// 		console.log("수정하고 다시 그림!!")
// 	}
// componentWillUnmount(){
// 		console.log("여기서 나갈래요")
// 		//나가기 전에 마지막으로 할 것들
// 	}

// // 카운트 올리기 함수
// onClickCouter = ()=>{
// 		console.log(this.state.conut)
// 		this.setState(((prev))=>({
// 		count : this.state.count(=prev.count) +1
// 			}))
// 	}

// // 현재 페이지 나가기 함수 _ componentWillUnmount를 보기위한
// onClickMove = () => {
// 		router.push('/')
// 	}
// // 화면 그리는 부분
// render(){
// 	return(
// 		<div>
// 			// this는 class 자기자신을 뜻합니다.
// 				<div>현재 카운트 : {this.state.count}</div>

// 			// 직접 바인딩 하실때는 onClick={this.onClickCouter.bind(this)} 라고 적어주셔야 합니다.
// 				<button onClick={this.onClickCouter}>카운트 올리기</button>
// 				<button onClick={this.onClickMove}>나가기</button>
// 		</div>
// 		)
// 	}
// }

// 2  함수형 컴포넌트의 생명주기 훅 useEffect
// 클래스형 컴포넌트에는 componentDidMount 와 같은 생명주기 메서드 들이 있습니다.
// 그렇다면 함수형 컴포넌트에서 생명주기 관련 훅은 무엇일 까요 ? 그건 바로  useEffect 입니다.

// 2 - 1 useEffect
// -componentDidMount
// // 의존성 배열 [] 에 아무것도 넣지 않으면 Mount 시에만 렌더해주고 끝나게 됩니다. (1번만 실행)
// useEffect(() => {
//     console.log("마운트 했다!!!");
// }, []);

// -componentDidUpdate 와 비슷
// 의존성 배열이 없기 때문에 뭐 하나라도 바꿔주면 무조껀 다시 실행 됩니다.
useEffect(() => {
    console.log("수정하고 다시 그려짐");
});

// someState 가 수정될때만 다시 리렌더링 해주기
useEffect(() => {
    console.log("수정하고 다시 그려짐 !!");
}, [someState]);

// - componentWillunmount
// componentDidUpdate 와 비슷하지만 다른점 하나는 , mount 가 되자마자 실행된다는점
useEffect(() => {
    console.log("수정하고 다시 그려짐 !");

    // 이 부분이 끝나고 진행할 것들
    return () => {
        console.log("여기서 나갈래요 !!");
    };
}, []);

// ※useEffect 의 실행시점
// -> 생명주기 메서드 , 훅은 기본적으로 렌더(화면그리기) 이후에 실행됩니다.
// 따라서 useEffect와 lifeCycle 메서드는 렌더 이후에 실행됩니다.

// useEffect 사용시 주의사항
// -> useEffect 안에서 setState 의 사용
// --> useEffect 내에서 setState를 사용할때는 정말 필요한 경우가 아니라면 지양하시는게 가장 좋습니다.

// -> 컴포넌트가 마운트 된 이후 setState 를 적용하게 되면
// 1. state 가 변경되고 , 2 . 변경된 state 로 컴포넌트가 다시 그려지게 된다(=리렌더)

// 즉 , useEffect 내에서 setState를 사용하게 되면 불필요한 리렌더나 무한루프를 일으키게 되고 , 성능면에서 비효율적으로 됩니다.
