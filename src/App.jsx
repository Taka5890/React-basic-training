import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちわ</h1>
      <p style={contentStyle}>お元気ですが？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 別の場所でもApp関数を使用するためには下記の記述が必要
export default App;
