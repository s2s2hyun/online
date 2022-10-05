// useRef

// 개인 프로젝트중 사진 업로드 하는데 있어서
// useRef를 사용을 했다 . 하지만 사용을 하는데 있어서 정확하게 어떠하게 어떤 기능을 정확히 하는지 정확히
// 이해를 하고 사용한 부분이 아니란걸 느껴 확실히 복습 아니 학습을 해서 내것으로 정리를 해보고자 한다.
// export default function Uploads01(props: any) {
//     const fileRef = useRef<HTMLInputElement>(null);
//     const [uploadFile] = useMutation(UPLOAD_FILE);

//     const onClickUpload = () => {
//         fileRef.current?.click();
//     };

//     const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
//         const file = checkValidationImage(event.target.files?.[0]);
//         if (!file) return;

//         try {
//             const result = await uploadFile({ variables: { file } });
//             props.onChangeFileUrls(result.data.uploadFile.url, props.index);
//         } catch (error: any) {
//             Modal.error({ content: error.message });
//         }
//     };

//     return (
//         <Uploads01UI
//             fileRef={fileRef}
//             fileUrl={props.fileUrl}
//             defaultFileUrl={props.defaultFileUrl}
//             onClickUpload={onClickUpload}
//             onChangeFile={onChangeFile}
//         />
//     );
// }

// 간단하게 개념 적인 공부를 하기 위해 Ref 에 대해서 개념 숙지를 해보자

// ####### Ref

// 리액트를 사용하기 전까지 우리는 특정 태그에 접근하기위해 document.getElementById() 를 사용했었다.
// 하지만 ,리액트는 실제 DOM 이 아닌 virtual DOM(가상돔) 을 다루기 때문에 위의 방법으로 접근했을때 문제가 생길수가 있습니다.
// 따라서 우리는 Ref 를 이용해 태그를 직접 변수에 저장하도록 하겠습니다.

// 예시 코드

// Class 형 컴포넌트 createRef()
// // 메서드 임포트
// import {createRef} from "react"

// // Ref 코드 생성
// inputRef = createRef()

// // Ref 를 적용하고 싶은 input 태그 (=접근 하고 싶은 태그 )

// <input type="text" ref={this.inputRef} />

// // 태그에 접근해서 실행시킬 함수
// componentDidMout(){
//     console.log("마운트됨")
//     this.inputRef.current?.focus()
// }

// ## useRef 로 특정 DOM 선택하기

// - javascript 를 사용할 때에는 , 우리가 특정 DOM 을 선택해야 하는 상황에 getElementById , querySelector 같은 DOM Selector 함수 를 사용해서 DOM 을 선택합니다.
// 리액트를 사용하는 프로젝트에서도 가끔 DOM 을 직접 선택해야 하는 상황이 있습니다. 또는 ,포커스를 설정해줘야 된다던지 , 스크롤바 위치를 가져오거나 설정해야된다던지 또는 ,
// 포커스를 설정해줘야된다던지 등 정말 다양한 상황이 있겠죠 . 추가적으로 Video .js , JWPlayer 같은 HTML5 Video 관련 라이브러리 , 또는 D3 Chart.js 같은 그래프 관련 라이브러리 등의 외부라이브러리
// 를 사용해야 할 때에도 특정 DOM 에다가 적용하기 때문에 DOM 을 선택해야 하는 상황이 발생할 수 있습니다. 그럴땐 리액트에서 ref 를 사용합니다.

// 간단한 예시 코드는 inputSample.js 를 작성했다.

// useRef() 를 사용하여 Ref 객체를 만들고 , 이 객체를 우리가 선택하고 싶은 DOM에 ref값으로 설정해주어야 합니다.
// 그러면 Ref 객체의 . current 값은 우리가 원하는 DOM 을 가르키게 합니다.
// inputSample.js 예시 코드에서 onReset 함수에서 input 에 포커스를 하는 focus() DOM API 를 호출해 주었습니다.
