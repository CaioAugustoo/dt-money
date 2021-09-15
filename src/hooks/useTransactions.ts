import { useContext } from "react";
import { TransactionsContext } from "contexts/Transactions";

export const useTransactions = () => {
  const transactions = useContext(TransactionsContext);

  return transactions;
};
