import {
  Box,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";
import useStyles from "../styles/App.styles";

export default function TodoList() {
  const classes = useStyles();

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked size="small" />}
        label={
          <Box className={classes.todoItemLabel}>
            <Typography variant="body2" className={classes.todoItemLabelText}>
              Item 1
            </Typography>
            <Chip
              label="success"
              color="success"
              variant="outlined"
              size="small"
              className={classes.todoItemLabelChip}
            />
          </Box>
        }
        className={classes.todoItem}
      />
    </FormGroup>
  );
}
