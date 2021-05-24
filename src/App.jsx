/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
// import ColorfulMessage from "./components/ColorfulMessage";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  // stateを利用するためには、useStateで分割代入を利用し、
  // 1つ目に動的に変わる値の変数,2つ目に動的に変更する関数を指定する

  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  // stateが変更されると再レンダリングされ頭から読み込まれる差分が更新される
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const ocClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  /**
   * 関心の分離:
   * 扱う変数やstateが増えてくるとそれぞれが干渉してうまく動作しなくなるために
   * 特定の変数にのみ関心を持つようにuseEffectを使う
   */

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // ファイル全体の場合は１番上のコメントアウトを使用
    // 次の１行だけの場合は下記のコメントを書くとエラーが消える
    // eslint-disable-next-line react -hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちわ</h1>
      {/* // コンポーネントがpropsを使用していて変更された際に再レンダリングされる */}
      {/* // 親のコンポーネントが変更されたら再レンダリングされる */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={ocClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>^_^</p>}
    </>
  );
};

// 別の場所でもApp関数を使用するためには下記の記述が必要
export default App;
