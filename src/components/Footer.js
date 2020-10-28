import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main,
        marginTop: '80px',
        padding: '10px 20px 20px',
        textAlign: 'center',
        color:'whitesmoke',
        fontFamily:'Roboto'
    },
     link :{
        color: 'wheat'
      }
  }));

const Footer = () => {
    const classes = useStyles();

    return (<div className={classes.root}>
        <div style={{marginBottom:'8px'}}><p>Website created by Osama Muhammad</p></div>
        <div><p>GitHub Account: <a className={classes.link} href='https://github.com/osamaMsaeed' target='_blank' rel="noopener noreferrer">github.com/osamaMsaeed</a></p></div>
        </div>  );
}
 
export default Footer;