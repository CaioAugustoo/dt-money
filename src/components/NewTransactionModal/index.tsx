import Modal from "react-modal";
import closeButton from "assets/close.svg";
import incomeImg from "assets/income.svg";
import outcomeImg from "assets/outcome.svg";

import * as S from "./styles";
import { FormEvent, useState } from "react";
import { base_url } from "services/api";

export type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    const data = {
      description: title,
      amount: value,
    };

    await fetch(`${base_url}/deposit`, {
      // Hardcode just for tests.
      // The backend should have an account with cpf equals "99999999"
      headers: {
        cpf: "99999999",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
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
