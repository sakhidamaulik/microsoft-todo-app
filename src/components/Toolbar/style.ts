import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  iconAndTitle: {
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    alignSelf: "center",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  allButtons: {
    paddingLeft: theme.spacing(2),
  },
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export default useStyles;
