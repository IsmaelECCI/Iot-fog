import * as React from 'react';
import { Card, CardContent, Typography, Box, Divider, Grid } from '@mui/material';

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Card
      sx={{
        width: '100%',
        boxShadow: 4,
        borderRadius: 3,
        backgroundColor: '#f5f5f5',
        fontFamily: 'Roboto, sans-serif',
        p: 2,
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#1976d2',
            fontFamily: 'Roboto Slab, serif',
            mb: 3,
            fontSize: '2rem',
          }}
        >
          Perfil del Usuario
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={3}>
          {/* Columna: Información Personal */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>👤 Personal</Typography>
            <Typography sx={{ mb: 1, fontSize: '1.1rem' }}>Nombre: <strong>{user.name}</strong></Typography>
            <Typography sx={{ mb: 1, fontSize: '1.1rem' }}>Username: <strong>{user.username}</strong></Typography>
            <Typography sx={{ fontSize: '1.1rem' }}>Email: <strong>{user.email}</strong></Typography>
          </Grid>

          {/* Columna: Ubicación */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>🌍 Ubicación</Typography>
            <Typography sx={{ mb: 1, fontSize: '1.1rem' }}>País: <strong>{user.country}</strong></Typography>
            <Typography sx={{ fontSize: '1.1rem' }}>Ciudad: <strong>{user.city}</strong></Typography>
          </Grid>

          {/* Columna: Laboral */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>💼 Laboral</Typography>
            <Typography sx={{ mb: 1, fontSize: '1.1rem' }}>Compañía: <strong>{user.company}</strong></Typography>
            <Typography sx={{ fontSize: '1.1rem' }}>Rol: <strong>{user.rol}</strong></Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
