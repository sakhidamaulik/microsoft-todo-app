import React, { useEffect } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListIcon from '@material-ui/icons/List';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { useSelector, useDispatch } from "react-redux";

// import projectListJSON from '../../projectList';

import useStyles from './style'
import ProjectListSelectors from '../../redux/selectors/ProjectList.Selectors';
import { ProjectListActions } from '../../redux/actions/ProjectList.Actions';

// const drawerWidth = 240;

const ProjectList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const projectList = useSelector(ProjectListSelectors.getProjectList);

  useEffect(() => {
    dispatch(ProjectListActions.GetProjectList());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.paper,
        }}
      >
        <List>
          {['My day', 'Important', 'Planned', 'Assigned to you', 'Tasks'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {projectList.map(list =>
            <ListItem button>
              <ListIcon />
              <ListItemText primary={list.title} />
              <ListItemText primary={list.count} />
            </ListItem>
          )}
        </List>
      </Drawer>
    </div >
  )
}

export default ProjectList;