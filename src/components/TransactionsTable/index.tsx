import { useEffect, useState } from "react";
import { api } from "services/api";
import * as S from "./styles";

export type Transaction = {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string | Date;
};

export const TransactionsTable = () => {
  const [data, setData] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then(response => setData(response.data.transactions));
  }, []);

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
          {data.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td
                className={
                  transaction.type === "deposit" ? "deposit" : "widthdraw"
                }
              >
                {transaction.amount}
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Wrapper>
  );
};
