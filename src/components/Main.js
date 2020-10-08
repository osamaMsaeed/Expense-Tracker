import React from "react";
import Grid from "@material-ui/core/Grid";

import Header from "./Header";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import History from "./History";
import NewTransaction from "./NewTransaction";

import {TransactionProvider} from '../context/TransactionContext';
import Footer from "./Footer";



const Main = () => {
  return (
    <TransactionProvider>
      <Grid container>
        <Grid container item xs={false} lg={4}></Grid>
        <Grid container item xs={12} lg={4}>
          <Grid item xs={1}></Grid>
          <Grid container item xs={10} direction="column" justify="center">
            <Header />
            <Balance />
            <IncomeExpense />
            <History />
            <NewTransaction />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid container xs={false} item lg={4}></Grid>
      </Grid>
      <Grid>
        <Footer />
      </Grid>
      </TransactionProvider>
  );
};

export default Main;
