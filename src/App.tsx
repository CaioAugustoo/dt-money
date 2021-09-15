import Modal from "react-modal";
import { useState } from "react";

import { Dashboard } from "components/Dashboard";
import { Header } from "components/Header";
import { NewTransactionModal } from "components/NewTransactionModal";

import { GlobalStyles } from "./styles/global";
import { TransactionsStorage } from "contexts/Transactions";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsStorage>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyles />
    </TransactionsStorage>
  );
}
