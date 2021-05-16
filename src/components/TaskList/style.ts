import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    height: "auto",
    display: "block",
    padding: "12px 16px 0 16px",
    position: "relative",
    alignItems: "center",
    flexShrink: 0,
  },
  toolbarTop: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "48px",
  },
  taskListTitle: {
    color: "#3e69e4",
  },
  moreIcon: {
    color: "#3e69e4",
  },
}));

export default useStyles;
