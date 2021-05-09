import React, { useEffect, useState, useCallback } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListIcon from '@material-ui/icons/List';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { useSelector, useDispatch } from "react-redux";
import Typography from '@material-ui/core/Typography';
import { v4 as uuid } from "uuid";

// import projectListJSON from '../../projectList';

import useStyles from './style'
import { IProjectList } from "../../models/ProjectList.Models";
import ProjectListSelectors from '../../redux/selectors/ProjectList.Selectors';
import { ProjectListActions } from '../../redux/actions/ProjectList.Actions';
import NewProjectList from '../NewProjectList/NewProjectList';

const ProjectList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const projectList = useSelector(ProjectListSelectors.getProjectList);

  const [newProjectListTitle, setNewProjectListTitle] = useState("");

  useEffect(() => {
    dispatch(ProjectListActions.GetProjectList());
  }, [dispatch]);

  const onAddProjectList = useCallback(() => {
    let projectListName = newProjectListTitle;
    if (!projectListName) {
      console.error("ProjectListTitle should not be empty");
      return;
    }
    const projectList: IProjectList = {
      id: uuid(),
      title: projectListName,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
    };
    console.log(projectList)
    dispatch(ProjectListActions.CreateProjectList(projectList));
  }, [dispatch, newProjectListTitle]);

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.paper,
        }}
      >
        <div className={classes.drawerContainer}>
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
          <NewProjectList
            newProjectListTitle={newProjectListTitle}
            setNewProjectListTitle={setNewProjectListTitle}
            onAddProjectList={onAddProjectList}
          />
        </div>
      </Drawer>

      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptates, sed, facilis debitis perferendis, nam illum non nulla aut voluptatum mollitia error cumque ex veritatis suscipit ea? Voluptas, odio incidunt.
      </Typography>
    </div >
  )
}

export default ProjectList;