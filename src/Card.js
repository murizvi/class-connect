import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardTitle from './CardTitle';
import Paper from '@material-ui/core/Paper';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  depositContext: {
    flex: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  }
}));

export default function Card() {
  const classes = useStyles();
  return (

        <Paper className={'classes.paper classes.fixedHeight'}>
      <CardTitle>Recent Deposits</CardTitle>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
      </Paper>

  );
}