import Modal from "react-modal";
import closeButton from "assets/close.svg";
import incomeImg from "assets/income.svg";
import outcomeImg from "assets/outcome.svg";

import * as S from "./styles";
import { FormEvent, useState } from "react";

export type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [selectedType, setSelectedType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();
  }

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

      <S.Wrapper onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={({ target }) => setValue(Number(target.value))}
        />

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

        <input
          placeholder="Categoria"
          onChange={({ target }) => setCategory(target.value)}
          value={category}
        />

        <button type="submit">Cadastrar</button>
      </S.Wrapper>
    </Modal>
  );
}
