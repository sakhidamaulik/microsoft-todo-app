import useStyles from './style'

interface ITaskListProps {
  projectListId: String;
}

const TaskList: React.FC<ITaskListProps> = (
  props: ITaskListProps
) => {
  const { projectListId } = props;
  const classes = useStyles();
  return <h1>{projectListId}</h1>
}

export default TaskList;