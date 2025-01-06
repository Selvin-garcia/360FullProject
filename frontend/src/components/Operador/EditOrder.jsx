import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { useOrdenes } from '../../Context/ContextoOrdenes';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const EditOrderForm = ({ open, handleClose, order }) => {
  const { actualizarEstadoOrden } = useOrdenes();
  const [nuevoEstado, setNuevoEstado] = useState(order.id_estado);

  const handleSubmit = (e) => {
    e.preventDefault();
    actualizarEstadoOrden(order.idOrden, nuevoEstado);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Editar Estado de la Orden
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Estado"
            value={nuevoEstado}
            onChange={(e) => setNuevoEstado(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Guardar
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default EditOrderForm;
