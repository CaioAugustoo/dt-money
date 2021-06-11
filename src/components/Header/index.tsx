import logo from "assets/logo.svg";

import * as S from "./styles";

export const Header = () => {
  return (
    <S.Header>
      <S.Content>
        <img src={logo} alt="Logo da dtmoney" />
        <button type="button">Nova transação</button>
      </S.Content>
    </S.Header>
  );
};
