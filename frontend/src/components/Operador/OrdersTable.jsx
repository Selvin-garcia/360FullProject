import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const OrdersTable = ({ orders }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Fecha de Creación</TableCell>
            <TableCell>Dirección de Envío</TableCell>
            <TableCell>Teléfono</TableCell>
            <TableCell>Correo Electrónico</TableCell>
            <TableCell>Fecha de Envío</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((orden) => (
            <TableRow key={orden.idOrden}>
              <TableCell>{orden.idOrden}</TableCell>
              <TableCell>{new Date(orden.fecha_creacion).toLocaleString()}</TableCell>
              <TableCell>{orden.direccion_envio}</TableCell>
              <TableCell>{orden.telefono}</TableCell>
              <TableCell>{orden.correo_electronico}</TableCell>
              <TableCell>{orden.fecha_envio}</TableCell>
              <TableCell>Q{orden.total_orden.toFixed(2)}</TableCell>
              <TableCell>{orden.id_estado === 1 ? 'Pendiente' : 'Completado'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
