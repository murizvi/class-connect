import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CourseHeader from './CourseHeader';
import { courseData, coursePosts, studentData } from '../common/data.js';
import CoursePost from './CoursePost'
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import CreatePost from './CreatePost';

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


export default function Course() {
    const [postInfo, setPosts] = React.useState(coursePosts);

    let {id} = useParams();
    const classes = useStyles();
    // return (
    //     <h2>Course ID is {id}</h2>
    // )


    
    let courseInfo = courseData[id];
    console.log(courseInfo);

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
        {studentData.map(value => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem key={value} button>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={"../images/student_avatar.jpg"}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={value.first + " " + value.last} />
            </ListItem>
          );
        })}
      </List>
      </Drawer>
        <CourseHeader post={{title: courseInfo.courseName,
                            description: "This is a sample description for a course",
                            image: "https://source.unsplash.com/random",
                            date: "Jan 17"}}/>
        {postInfo.map((post) => (
            <CoursePost post={post}/>
        ))}  
      <CreatePost updatePosts={setPosts}/>                
    </div>
    );


}