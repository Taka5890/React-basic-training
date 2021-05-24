import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

/** 
 *exportの方法は２種類ある下記のパターンか
 ３行目のconstの前にexportを記載する⇨こちらがおすすめ
 ただし、先頭に記載するパターンはimportするファイルで指定する場合に分割代入を利用する
 なぜおすすめかはexportしているコンポート名が間違っているとエラーを出してくれるから
 */
// export default ColorfulMessage;
