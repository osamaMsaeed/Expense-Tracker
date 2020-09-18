import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TransactionContext } from "../context/TransactionContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    fontFamily: "Roboto",
  },
  title: {
    fontSize: 16,
  },
  balance: {
    fontSize: 28,
    letterSpacing: 2,
    wordBreak: "break-all",
  },
}));

const Balance = () => {
  const classes = useStyles();
  const [transactions] = useContext(TransactionContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const balance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const sign = balance >= 0 ? '' : '-';

  return (
    <div className={classes.root}>
      <p className={classes.title}>YOUR BALANCE</p>
  <h1 className={classes.balance}>{sign}${Math.abs(balance).toFixed(2)}</h1>
    </div>
  );
};

export default Balance;
