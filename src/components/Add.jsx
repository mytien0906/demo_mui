import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import useStyles from "../styles/App.styles";

export default function Add() {
  const classes = useStyles();

  return (
    <Box className={classes.add}>
      <TextField size="small" placeholder="Input search text..." fullWidth />
      <Select defaultValue="low" size="small" className={classes.addSelect}>
        <MenuItem value="low">Low</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="high">High</MenuItem>
      </Select>
      <Button variant="outlined" className={classes.addButton}>
        Add
      </Button>
    </Box>
  );
}
