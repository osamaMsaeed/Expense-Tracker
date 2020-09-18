import React, { createContext, useState } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransaction] = useState([]);

  return (
    <TransactionContext.Provider value={[transactions, setTransaction]}>
      {children}
    </TransactionContext.Provider>
  );
};
