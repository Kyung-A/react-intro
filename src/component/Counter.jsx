import React, { useReducer } from "react";

// 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
}

function Counter() {
  //   const [number, setNumber] = useState(0);
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    // 두번째 원소에 파라미터로 함수를 넘겨주면 이전 값을 넣어주는 callback이 일어난다
    // setNumber((prevNumber) => prevNumber + 1);

    // type 'INCREMENT' 액션을 실행함
    dispatch({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    // setNumber((prevNumber) => prevNumber - 1);

    // type 'DECREMENT' 액션을 실행함
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
