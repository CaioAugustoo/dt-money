import logo from "assets/logo.svg";

import * as S from "./styles";

export type HeaderProps = {
  handleOpenNewTransactionModal: () => void;
};

export const Header = ({ handleOpenNewTransactionModal }: HeaderProps) => {
  return (
    <S.Header>
      <S.Content>
        <img src={logo} alt="Logo da dtmoney" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </button>
      </S.Content>
    </S.Header>
  );
};
