import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import {
  Alert,
  Checkbox,
  createTheme,
  FormControlLabel,
  Paper,
  Snackbar,
} from "@mui/material";
import PositionedSnackbar from "../../ui/snack_bar";
import SignIn from "./sign_in";
import SignUp from "./sign_up";
import { useState } from "react";

export default function Auth() {
  const defaultTheme = createTheme();
  const [step, setStep] = useState(0);
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(../images/photo.avif)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          {step === 0 ? (
            <SignIn setStep={setStep} />
          ) : (
            <SignUp setStep={setStep} />
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
