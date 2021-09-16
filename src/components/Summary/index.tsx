import income from "assets/income.svg";
import outcome from "assets/outcome.svg";
import total from "assets/total.svg";

import { useTransactions } from "hooks/useTransactions";
import { formatPrice } from "utils/formatters/price";

import * as S from "./styles";

export const Summary = () => {
  const { transactions } = useTransactions();

  const incomesTotal = transactions
    .filter(el => el.type === "deposit")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expensesTotal = transactions
    .filter(el => el.type === "withdraw")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalAmount = incomesTotal - expensesTotal;

  return (
    <S.Wrapper>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Seta pra cima com cor verde" />
        </header>
        <strong>{formatPrice(incomesTotal)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="Seta pra baixa com cor vermelha" />
        </header>
        <strong>{formatPrice(expensesTotal)}</strong>
      </div>
      <div className="card__total">
        <header>
          <p>Total</p>
          <img src={total} alt="Simbolo de cifrão" />
        </header>
        <strong>{formatPrice(totalAmount)}</strong>
      </div>
    </S.Wrapper>
  );
};
