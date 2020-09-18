import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Divider } from "@material-ui/core";
import TransactionContainer from "./TransactionContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 35,
  },

  title: {
    fontSize: 16,
    fontFamily: "Roboto",
  },
}));

const History = () => {
  const classes = useStyles();

  return (
    <Grid container item direction='column' className={classes.root}>
      <p className={classes.title}>History</p>
      <Divider variant='fullWidth' />
      <hr></hr>
      <TransactionContainer />
    </Grid>
  );
};

export default History;
