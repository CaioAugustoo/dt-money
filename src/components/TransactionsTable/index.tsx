import { useTransactions } from "hooks/useTransactions";

import { formatDate } from "utils/formatters/date";
import { formatPrice } from "utils/formatters/price";

import * as S from "./styles";

export const TransactionsTable = () => {
  const { transactions } = useTransactions();

  return (
    <S.Wrapper>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {formatPrice(transaction?.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{formatDate(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Wrapper>
  );
};
