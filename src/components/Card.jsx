import {
  Box,
  Card as DefaultCard,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import useStyles from "../styles/App.styles";
import theme from "../styles/Theme.styles";
import Add from "./Add";
import Search from "./Search";
import TodoList from "./TodoList";

export default function Card() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <DefaultCard className={classes.card}>
          <Box style={{ width: "100%" }}>
            <Typography
              variant="h3"
              component="div"
              align="center"
              className={classes.title}
            >
              hi Mtien
            </Typography>
            <Search />
            <TodoList />
          </Box>
          <Box style={{ width: "100%" }}>
            <Add />
          </Box>
        </DefaultCard>
      </Box>
    </ThemeProvider>
  );
}
