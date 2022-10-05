// ## 함수형 컴포넌트 useRef()

import { useRef } from "react";

// Ref 코드 생성
const inputRef = useRef();

// Ref를 적용하고 싶은 input태그 (=접근하고 싶은 태그 )
<input type="text" ref={inputRef} />;

useEffect(() => {
    console.log("마운트 됨");
    inputRef.current?.focus();
});

//
