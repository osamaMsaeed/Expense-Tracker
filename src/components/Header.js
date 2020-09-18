import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: 20,
      textAlign:"center",
      fontFamily:'Roboto',
      fontSize:13,
      backgroundColor:'#f5f5f5',
    },
  }));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant='h4' color='primary' fontSize='12'>Expense Tracker</Typography>
        </div>
    )
}

export default Header
