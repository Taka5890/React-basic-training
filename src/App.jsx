import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  // stateを利用するためには、useStateで分割代入を利用し、
  // 1つ目に動的に変わる値の変数,2つ目に動的に変更する関数を指定する
  const [num, setNum] = useState(0);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちわ</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>

      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

// 別の場所でもApp関数を使用するためには下記の記述が必要
export default App;
