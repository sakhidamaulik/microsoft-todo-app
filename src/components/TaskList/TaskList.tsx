import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button, Divider, Menu, MenuItem } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './style'
import { IProjectList } from '../../models/ProjectList.Models';
interface ITaskListProps {
  projectListId: String;
  projectList: IProjectList[],
}

const TaskList: React.FC<ITaskListProps> = (
  props: ITaskListProps
) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const { projectListId, projectList } = props;
  const projectListTitle = projectList.find(item => item.id === projectListId);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.toolbar}>
      <div className={classes.toolbarTop}>
        <h2 className={classes.taskListTitle}><span>{projectListTitle?.title}</span></h2>
        <div>
          <Button onClick={handleClick}>
            <MoreHorizIcon className={classes.moreIcon} />
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <MenuItem>List Options</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <EditAttributesIcon />
              Rename List
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <DeleteIcon />
              Delete List
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default TaskList;