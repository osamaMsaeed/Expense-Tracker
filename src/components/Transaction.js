import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import clsx from "clsx";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import {TransactionContext} from '../context/TransactionContext';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    "& > *": {
      height: theme.spacing(5),
    },
    backgroundColor: "#f5f5f5",
    boxShadow: "0px 1px 1px 1px #888888",
  },

  title: {
    fontSize: 14,
    fontFamily: "Roboto",
  },
  box: {
    display: "grid",
    gridTemplateColumns: "0.5fr 15fr 3fr 0.8fr",
    alignItems: "stretch",

    minHeight: 35,
    height: "auto",
  },
  subtitle: {
    wordBreak: "break-all",
  },
  bar: {
    marginLeft:4,
  },
  redBar:{
    backgroundColor: 'red',
  },
  greenBar:{
    backgroundColor: 'green',
  },
  Icon: {
    paddingTop: 6,
    paddingRight: 4,
    color: "red",
    cursor: "pointer",
    "&:hover": {
      color: "black",
    },
  },
  forMargin: {
    marginTop: 10,
  },
}));

const Transaction = ({transaction}) => {
  const classes = useStyles();
  const [transactions, setTransactions] = useContext(TransactionContext);
  const sign = transaction.amount >= 0 ? '+' : '-';
  const barColor = transaction.amount >= 0 ? 'greenBar' : 'redBar';

  const handleDelete = (id) =>{
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  }

  return (
    <Grid
      container
      item
      className={classes.root}
      direction="column"
      wrap="nowrap"
    >
      <div className={clsx(classes.box, classes.title)}>
        <div className={classes.Icon} onClick={()=>handleDelete(transaction.id)}>
          <HighlightOffIcon />
        </div>
        <p className={clsx(classes.subtitle, classes.forMargin)}>
          {transaction.text}
        </p>
  <div className={classes.forMargin}>{sign}${Math.abs(transaction.amount).toFixed(2)}</div>
        <div className={clsx(classes.bar, classes[barColor])}></div>
      </div>
    </Grid>
  );
};

export default Transaction;
