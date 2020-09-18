import React, { useContext } from "react";
import { Divider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TransactionContext } from "../context/TransactionContext";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    "& > *": {
      height: theme.spacing(10),
    },
    backgroundColor: "#f5f5f5",
    boxShadow: "1px 1px 1px 1px #888888",
  },

  title: {
    fontSize: 16,
    fontFamily: "Roboto",
    position: "relative",
    top: "30%",
    wordBreak: "break-all",
  },
  income: {
    color: "green",
  },
  expense: {
    color: "red",
  },
}));

const IncomeExpense = () => {
  const classes = useStyles();
  const [transactions] = useContext(TransactionContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <Grid
      className={classes.root}
      container
      item
      direction="row"
      align="center"
      wrap="nowrap"
    >
      <Grid item xs={12} md={5}>
        <div className={classes.title}>
          <p>INCOME</p>
          <p className={classes.income}>${income}</p>
        </div>
      </Grid>
      <Grid item xs={false} md={2}>
        {" "}
        <Divider orientation="vertical" variant="middle" />
      </Grid>
      <Grid item xs={12} md={5}>
        <div className={classes.title}>
          <p>EXPENSE</p>
          <p className={classes.expense}>${expense}</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default IncomeExpense;
