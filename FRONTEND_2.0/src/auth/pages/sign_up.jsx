import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";

import { MenuItem } from "@mui/material";
import PositionedSnackbar from "../../ui/snack_bar";
import { useState } from "react";
import IOTApi from "../../API/api";

const initalStateForm = {
  username: "",
  password: "",
  email: "",
  name: "",
  country: "",
  city: "",
  company: "",
  rol: "",
};

export const roles = ["Admin", "User"];
export const countries = [
  {
    flag: "https://www.worldometers.info/img/flags/co-flag.gif",
    country: "Colombia",
  },

  {
    flag: "https://www.worldometers.info/img/flags/ar-flag.gif",
    country: "Argentina",
  },

  {
    flag: "https://www.worldometers.info/img/flags/ec-flag.gif",
    country: "Ecuador",
  },
];




export default function SignUp({ setStep }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initalStateForm,
  });

  const [alertVisibility, setalertVisibility] = useState(false)
  const [alertMessage, setalertMessage] = useState("")
  const [alertSeverity, setalertSeverity] = useState("")

  const show_alert = (mensaje, severity) =>{
  setalertMessage(mensaje)
  setalertSeverity(severity)
  setalertVisibility(true)
}

  
  const singUp = async (payload) => {
    
    console.log("payload", payload);


    try {
      

      // console.log("holamundo", params);

      const response = await IOTApi.post("users", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      show_alert("Usuario Registrado","success")
      console.log("Respuesta del servidor:", response.data);
      setStep(0)
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
      show_alert("Usuario no registrado","error")
    }
  };

  return (
    <>
      <PositionedSnackbar message={alertMessage} severity={alertSeverity} open={alertVisibility} onclose={()=>setalertVisibility(false)} />
      <CssBaseline />
      <Box
        sx={{
          my: 6,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(singUp)}
          sx={{ mt: 1 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyItems: "flex-end",
              gap: 2,
            }}
          >
            <Controller
              name="name"
              control={control}
              rules={{
                required: "Campo Requerido",
                minLength: 3,
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  placeholder="Christian"
                  helperText={errors.name?.message}
                  error={!!errors.name}
                />
              )}
            />

            <Controller
              name="username"
              control={control}
              rules={{
                required: "Campo Requerido",
                minLength: 3,
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Nombre Usuario"
                  name="username"
                  autoFocus
                  placeholder="Christian123"
                  helperText={errors.username?.message}
                  error={!!errors.username}
                />
              )}
            />
          </Box>
          <Controller
            name="email"
            control={control}
      
            rules={{
              required: "Campo Requerido",
              minLength: 10,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: " Email invalido",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                placeholder="christian@example.com"
                helperText={errors.email?.message}
                error={!!errors.email}
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

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyItems: "flex-end",
              gap: 2,
            }}
          >
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="País"
                  margin="normal"
                  required
                  fullWidth
                  id="country"
                  error={!!errors.country}
                  helperText={errors.country?.message}
                >
                  {countries.map((option, index) => (
                    <MenuItem key={index} value={option.country}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={option.flag}
                          alt={`Bandera de ${option.country}`}
                          width={24}
                          height={16}
                          style={{ marginRight: 8, objectFit: "cover" }}
                        />
                        <Typography variant="body1">
                          {option.country}
                        </Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />

            <Controller
              name="city"
              control={control}
              rules={{
                required: "Campo Requerido",
                minLength: 3,
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  required
                  fullWidth
                  id="city"
                  label="Ciudad"
                  name="city"
                  helperText={errors.city?.message}
                  error={!!errors.city}
                />
              )}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyItems: "flex-end",
              gap: 2,
            }}
          >
            <Controller
              name="company"
              control={control}
              rules={{
                required: "Campo Requerido",
                minLength: 3,
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  required
                  fullWidth
                  id="company"
                  label="Compañía"
                  name="company"
                  autoComplete="company"
                  autoFocus
                  placeholder="Ecci"
                  helperText={errors.company?.message}
                  error={!!errors.company}
                />
              )}
            />

            <Controller
              name="rol"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  margin="normal"
                  required
                  fullWidth
                  id="rol"
                  label="Rol"
                  name="rol"
                  autoFocus
                  helperText={errors.rol?.message}
                  error={!!errors.rol}
                >
                  {roles.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                href="#"
                variant="body2"
                onClick={(e) => {
                  e.preventDefault();
                  setStep(0);
                }}
              >
                {"Ya tienes cuenta? Ingresa"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
