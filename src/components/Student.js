import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FolderIcon from '@material-ui/icons/Folder';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {useHistory} from 'react-router-dom'
import {assignmentData} from '../common/data'
import Assignment from './Assignment'
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom'

export default function Student() {
    let [assignmentID, setAssignment] = useState(0);
    let {id} = useParams();

    let assignment = {id: 6};

    const drawerWidth = 260;

    const useStyles = makeStyles(theme => ({
        root: {
        flexGrow: 1,
        marginLeft: drawerWidth,
        paddingLeft: "24px",
        paddingRight: "24px"
        },
        drawer: {
        width: drawerWidth,
        flexShrink: 0,
        },
        drawerPaper: {
        width: drawerWidth,
        paddingTop: "72px"
        },
        content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        },
        fab: {
            position: 'absolute',
            bottom: theme.spacing(4),
            right: theme.spacing(6),
        }
    }));

    let classes = useStyles();

    let history = useHistory();
    console.log(Object.keys(assignmentData))

    return (
        <div className={classes.root}>
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <List dense>
        {Object.keys(assignmentData).map(value => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          const gradeLabel = `${assignmentData[value].grade}%`;
          return (
            <ListItem key={value} button onClick={() => setAssignment(value)}>
            <ListItemAvatar>
                <Avatar>
                    <FolderIcon/>
                </Avatar>
            </ListItemAvatar>
              <ListItemText id={labelId} primary={assignmentData[value].title} secondary={assignmentData[value].date}/>
            <ListItemAvatar>
            <ListItemText id={{labelId}+'2'} primary={gradeLabel}/>
            </ListItemAvatar>
            </ListItem>
          );
        })}
      </List>
      </Drawer>
        <Assignment assignment={assignmentData[assignmentID]}/>
    </div>
    )
}