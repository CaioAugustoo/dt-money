import { useEffect, useState } from "react";

import { base_url } from "services/api";

import { formatDate } from "utils/formatters/date";
import { formatPrice } from "utils/formatters/price";

import * as S from "./styles";

export type Transaction = {
  id: string;
  description: string;
  type: string;
  amount: number;
  created_at: Date | number;
};

export const TransactionsTable = () => {
  const [data, setData] = useState<Transaction[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${base_url}/statements`, {
        // Hardcode just for tests.
        // The backend should have an account with cpf equals "99999999"
        headers: {
          cpf: "99999999",
        },
      });
      const json = await res.json();
      setData(json.data);
    };
    getData();
  }, []);

  return (
    <S.Wrapper>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td className={transaction.type}>
                {formatPrice(transaction?.amount)}
              </td>
              <td>{formatDate(transaction.created_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Wrapper>
  );
};
