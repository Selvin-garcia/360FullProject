import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal, Box, Typography, TextField } from '@mui/material';
import { useOrdenes } from '../../Context/ContextoOrdenes';

const OrdersTable = ({ orders }) => {
  const { actualizarEstadoOrden } = useOrdenes();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newEstado, setNewEstado] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = (orden) => {
    setSelectedOrder(orden);
    setNewEstado(orden.id_estado);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actualizarEstadoOrden(selectedOrder.idOrden, newEstado);
    handleClose();
  };

  return (
    <>
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
              <TableCell>Acciones</TableCell>
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
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleOpen(orden)}>
                    Editar Estado
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 400 }}>
          <Typography variant="h6" component="h2">
            Editar Estado de la Orden
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Nuevo Estado"
              value={newEstado}
              onChange={(e) => setNewEstado(e.target.value)}
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Guardar
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

// Modal style
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default OrdersTable;
