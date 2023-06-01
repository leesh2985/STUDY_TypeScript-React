import "./App.css";
import React, { useEffect, useState } from "react";

// useEffect
/**
 *
 * mount (=리액트 컴포넌트가 그려질때, 렌더될때)
 * unmount (=리액트 컴포넌트가 사라질때, 지워질때)
 * update (=특정 값이 변해서 리액트 컴포넌트가 다시 그려질때)
 */

function App() {
  const [count, setCount] = useState();

  useEffect(() => console.log("Hello"), [count]);
  return <div className="App"></div>;
}

export default App;
