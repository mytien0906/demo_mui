import { Box, Button, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import useStyles from "../styles/App.styles";

export default function Search() {
  const classes = useStyles();

  return (
    <Box className={classes.search}>
      <TextField size="small" placeholder="Input search text..." fullWidth />
      <Button variant="outlined" className={classes.searchButton}>
        <SearchIcon fontSize="small" />
      </Button>
    </Box>
  );
}
