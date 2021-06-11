import { useEffect, useState } from "react";
import * as S from "./styles";

export const TransactionsTable = () => {
  const [, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/api/transactions");
      const json = await response.json();
      setData(json);
    })();
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="withdraw">- R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </S.Wrapper>
  );
};
