import Modal from "react-modal";
import closeButton from "assets/close.svg";
import incomeImg from "assets/income.svg";
import outcomeImg from "assets/outcome.svg";

import * as S from "./styles";
import { useState } from "react";

export type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [selectedType, setSelectedType] = useState("deposit");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeButton} alt="Fechar Modal" />
      </button>

      <S.Wrapper>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <S.TransactionTypeWrapper>
          <S.RadioBox
            type="button"
            isActive={selectedType === "deposit"}
            activeColor="green"
            onClick={() => setSelectedType("deposit")}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.RadioBox>

          <S.RadioBox
            type="button"
            isActive={selectedType === "withdraw"}
            activeColor="red"
            onClick={() => setSelectedType("withdraw")}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeWrapper>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </S.Wrapper>
    </Modal>
  );
}
