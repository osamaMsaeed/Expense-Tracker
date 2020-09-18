import React, {useContext} from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import { Button } from "@material-ui/core";
import clsx from 'clsx';

import {TransactionContext} from '../context/TransactionContext';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
  },

  title: {
    fontSize: 14,
    fontFamily: "Roboto",
  },
  row:{
    marginBottom:5,
  },
  input:{
    width:'100%',
    height:28,
  },
  
  error:{
    color:'red',
    fontSize:12,
  },
  button:{
    width:'100%',
    marginTop:10,
    marginBottom:10,
    borderRadius:0
  }
}));

const TransactionForm = () => {
  const classes = useStyles();
  const [transactions, setTransactions] = useContext(TransactionContext);

  const addTransaction = (transaction) =>{
    setTransactions((prevTransactions)=>([
      transaction,
      ...prevTransactions
    ]))
  }

  return (
    <div className={classes.root}>
      <Formik
        initialValues={{ text: "", amount: "" }}
        validationSchema={Yup.object({
          text: Yup.string().trim()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          amount: Yup.number()
            .typeError("Must be a number")
            .required("Required"),
        })}
        onSubmit={(values, {resetForm}) => {
          values.id = Math.random();
          addTransaction(values);
          resetForm({});
        }}
      >
        {(formik) => (
          <Form className={classes.title}>
            <p className={classes.row}>
              <label htmlFor="text">Text</label>
            </p>
            <p className={classes.row}>
              <Field className={classes.input} name="text" type="text" placeholder='Enter Text...' />
            </p>
            <p className={clsx(classes.error, classes.row)}>
              <ErrorMessage name="text" />
            </p>
            <p>
              <label htmlFor="amount">Amount</label>
            </p>
            <p className={classes.row}>
              <label htmlFor="amountDescription">
                (Negative - Expense, Positive - Income)
              </label>
            </p>
            <p className={classes.row}>
              <Field className={classes.input} name="amount" type="number" step='0.01' placeholder='Enter Amount...' />
            </p>
            <p className={classes.error}>
              <ErrorMessage name="amount" />
            </p>
            <Button className={classes.button} variant='contained' disableElevation color='primary' type='submit'>Add new transaction</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TransactionForm;
