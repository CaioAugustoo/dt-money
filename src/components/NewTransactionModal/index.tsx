import { FormEvent, useState } from "react";

import Modal from "react-modal";

import { useTransactions } from "hooks/useTransactions";

import { v4 as id } from "uuid";

import closeButton from "assets/close.svg";
import incomeImg from "assets/income.svg";
import outcomeImg from "assets/outcome.svg";

import * as S from "./styles";

export type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("deposit");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(0);

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    const data = {
      id: id(),
      title,
      description: title,
      amount: value,
      type,
      category,
      createdAt: new Date(),
    };

    createTransaction(data);
    onRequestClose();
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
          required
          placeholder="Título"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <input
          required
          type="number"
          placeholder="Valor"
          value={value}
          onChange={({ target }) => setValue(Number(target.value))}
        />
        <input
          required
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        />

        <S.TransactionTypeWrapper>
          <S.RadioBox
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => setType("deposit")}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.RadioBox>

          <S.RadioBox
            type="button"
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => setType("withdraw")}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeWrapper>

        <button type="submit">Cadastrar</button>
      </S.Wrapper>
    </Modal>
  );
}
