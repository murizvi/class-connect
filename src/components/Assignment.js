import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  gradeTitle: {
  	padding: '40px',

    }
  },
}));

export default function Assignment(props) {
	const classes = useStyles();
    return (
    	<div className={classes.root}>
    	<Paper className={classes.gradeTitle}>
        <h2>{props.assignment.title}</h2>
        <h3>{props.assignment.grade}%</h3>
        </Paper>
    	</div>

    )
}