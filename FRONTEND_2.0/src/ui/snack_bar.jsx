import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

export default function PositionedSnackbar({ message, severity, open, onclose }) {



  return (
    <Snackbar
      autoHideDuration={6000}
      anchorOrigin={{ vertical:"top", horizontal:"right" }}
      open={open}
      key= "topright"
    >
      <Alert onClose={onclose} severity= {severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
