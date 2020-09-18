import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Divider } from "@material-ui/core";
import TransactionForm from "./TransactionForm";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 35,
  },

  title: {
    fontSize: 16,
    fontFamily: "Roboto",
  },
}));

const NewTransaction = () => {
  const classes = useStyles();

  return (
    <Grid container item direction='column' className={classes.root}>
      <p className={classes.title}>Add new transaction</p>
      <Divider variant='fullWidth' />
      <hr></hr>
      <TransactionForm/>
    </Grid>
  );
};

export default NewTransaction;
