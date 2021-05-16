import React from "react";
import AddIcon from '@material-ui/icons/Add';
import { TextField } from '@material-ui/core';

import useStyles from './style'

interface INewProjectListProps {
  newProjectListTitle: string;
  setNewProjectListTitle: any;
  onAddProjectList: any;
}

const NewProjectList: React.FC<INewProjectListProps> = (props: INewProjectListProps) => {
  const {
    newProjectListTitle,
    setNewProjectListTitle,
    onAddProjectList,
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        onChange={(e) => {
          setNewProjectListTitle(e.target.value);
        }}
        onKeyPress={event => {
          if (event.key === "Enter") {
            onAddProjectList();
          }
        }}
        value={newProjectListTitle}
        InputProps={{
          startAdornment: (
            <AddIcon />
          ),
          disableUnderline: true,
        }}
        placeholder="New List"
      >
      </TextField>
    </div >
  )
}

export default NewProjectList;