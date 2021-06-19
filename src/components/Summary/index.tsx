import * as S from "./styles";

import income from "assets/income.svg";
import outcome from "assets/outcome.svg";
import total from "assets/total.svg";
import { useContext } from "react";
import TransactionsContext from "TransactionsContext";

export const Summary = () => {
  const data = useContext(TransactionsContext);

  return (
    <S.Wrapper>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Seta pra cima com cor verde" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="Seta pra baixa com cor vermelha" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="card__total">
        <header>
          <p>Total</p>
          <img src={total} alt="Simbolo de cifrão" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </S.Wrapper>
  );
};
