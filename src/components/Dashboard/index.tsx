import { Summary } from "components/Summary";
import { TransactionsTable } from "components/TransactionsTable";

import * as S from "./styles";

export const Dashboard = () => {
  return (
    <S.Wrapper>
      <Summary />
      <TransactionsTable />
    </S.Wrapper>
  );
};
