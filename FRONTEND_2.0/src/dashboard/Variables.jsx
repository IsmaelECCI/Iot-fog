import * as React from 'react';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';
import IOTApi from '../API/api'; // asegúrate que la ruta sea correcta

export default function Variables() {
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    const fetchVariables = async () => {
      try {
        const response = await IOTApi.get("/variables");
        setVariables(response.data);
      } catch (error) {
        console.error("Error al obtener las variables:", error);
      }
    };

    fetchVariables();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      <Typography variant="h4" gutterBottom>
        Variables Registradas
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="variables table">
          <TableHead>
            <TableRow>
              <TableCell><b>Dispositivo</b></TableCell>
              <TableCell><b>Nombre de Variable</b></TableCell>
              <TableCell><b>Unidad</b></TableCell>
              <TableCell><b>Descripción</b></TableCell>
              <TableCell><b>Intervalo (ms)</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {variables.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.device_id}</TableCell>
                <TableCell>{row.variable_name}</TableCell>
                <TableCell>{row.unit}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.sampling_ms}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}