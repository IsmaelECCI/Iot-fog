import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import PositionedSnackbar from "../../ui/snack_bar";
import { useState } from "react";
import IOTApi from "../../API/api";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const initalStateForm = {
  username: "",
  password: "",
};

export default function SignIn({ setStep }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initalStateForm,
  });

  const navigate = useNavigate();

  const [alertVisibility, setalertVisibility] = useState(false)
  const [alertMessage, setalertMessage] = useState("")
  const [alertSeverity, setalertSeverity] = useState("")

  const show_alert = (mensaje, severity) => {
    setalertMessage(mensaje)
    setalertSeverity(severity)
    setalertVisibility(true)
  }

  const singIn = async ({ username, password }) => {
    console.log("holas", username);



    try {
      const params = new URLSearchParams();
      params.append("username", username);
      params.append("password", password);

      // console.log("holamundo", params);

      const response = await IOTApi.post("login", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      console.log("Respuesta del servidor:", response.data.access_token);
      const token = response.data.access_token
      localStorage.setItem("token", token);
      show_alert("Credenciales correctas", "success")
      const users = await IOTApi.get("users", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const user= users.data.find(user=>user.username===username)
      localStorage.setItem("user",JSON.stringify(user))
      navigate("/dashboard");
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
      show_alert("Credenciales invalidas", "error")

    }
  };

  return (
    <>

      <PositionedSnackbar message={alertMessage} severity={alertSeverity} open={alertVisibility} onclose={() => setalertVisibility(false)} />
      <CssBaseline />
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(singIn)}
          sx={{ mt: 1 }}
        >
          <Controller
            name="username"
            control={control}
            rules={{
              required: "Campo Requerido",
              minLength: 4

            }}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                placeholder="Chris1234"
                helperText={errors.username?.message}
                error={!!errors.username}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{
              minLength: {
                value: 9,
                message: "Debe tener al menos 9 caracteres",
              },
              required: "Campo Requerido",
            }}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                required
                fullWidth
                label="Contraseña"
                type="password"
                id="password"
                placeholder="yourpassword"
                helperText={errors.password?.message}
                error={!!errors.password}
              />
            )}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                href="#"
                variant="body2"
                onClick={(e) => {
                  e.preventDefault();
                  setStep(1);
                }}
              >
                {"¿No tienes cuenta? Regístrate"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
