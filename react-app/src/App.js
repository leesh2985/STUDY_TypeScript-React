import "./App.css";
import React, { useEffect, useState } from "react";

// useEffect
/**
 *
 * mount (=리액트 컴포넌트가 그려질때, 렌더될때)
 * unmount (=리액트 컴포넌트가 사라질때, 지워질때)
 * update (=특정 값이 변해서 리액트 컴포넌트가 다시 그려질때)
 */

/** Hook
 * 1. 최상위에서 호출되어야한다.
 * 2. 오직 React함수에서만 hook을 호출해야한다.
 */

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 5) {
      console.log("this is five");
    }
  }, [count]);

  return (
    <div className="App">
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
