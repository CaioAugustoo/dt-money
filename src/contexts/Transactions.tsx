import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from "react";
import { api } from "services/api";

export type Transaction = {
  id: string;
  title: string;
  description: string;
  type: string;
  amount: number;
  category: string;
  createdAt: Date | number;
};

type TransactionsContextProps = {
  transactions: Transaction[];
  createTransaction: (data: Transaction) => Promise<void>;
};

type TransactionsStorageProps = {
  children: ReactNode;
};

export const TransactionsContext = createContext(
  {} as TransactionsContextProps
);

export const TransactionsStorage = ({ children }: TransactionsStorageProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/statements")
      .then(({ data }) => setTransactions(data.transactions));
  }, []);

  const createTransaction = useCallback(async (data: Transaction) => {
    setTransactions(prev => [...prev, data]);
    api.post("/statements", data);
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};
