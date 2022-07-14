import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    background: "#efefef",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    minWidth: "500px",
    minHeight: "500px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    textTransform: "capitalize",
    marginBottom: "20px !important",
  },
  search: {
    display: "flex",
    alignItems: "stretch",
    marginBottom: "20px",
  },
  searchButton: {
    marginLeft: "10px !important",
  },
  todoItem: {
    "& span:nth-child(2)": {
      width: "100%",
    },
  },
  todoItemLabel: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoItemLabelText: {
    marginTop: "5px !important",
  },
  todoItemLabelChip: {
    borderRadius: "3px !important",
  },
  add: {
    display: "flex",
    alignItems: "stretch",
  },
  addButton: {
    marginLeft: "10px !important",
  },
  addSelect: {
    marginLeft: "10px !important",
  },
});

export default useStyles;
