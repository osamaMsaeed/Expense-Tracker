import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Transaction from "./Transaction";
import { TransactionContext } from "../context/TransactionContext";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
  },

  title: {
    fontSize: 16,
    fontFamily: "Roboto",
  },
}));

const TransactionContainer = () => {
  const classes = useStyles();
  const [transactions] = useContext(TransactionContext);

  return (
    <Grid container item className={classes.root} direction="column">
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </Grid>
  );
};

export default TransactionContainer;
