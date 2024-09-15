import React, { useState } from 'react';
import ModalAgregar from '../screens/Dictionary/ModalAgregar';
import ModalEliminar from '../screens/Dictionary/ModalEliminar';
import ModalTraductor from '../screens/Dictionary/ModalTraductor';

function Traductor() {
  const [modalAgregar, setModalAgregar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalTraductor, setModalTraductor] = useState(false);

  return (
    <div>
      <h1>Traductor</h1>
      <button onClick={() => setModalAgregar(true)}>Agregar Palabra</button>
      <button onClick={() => setModalEliminar(true)}>Eliminar Palabra</button>
      <button onClick={() => setModalTraductor(true)}>Traducir</button>

      {modalAgregar && <ModalAgregar onClose={() => setModalAgregar(false)} />}
      {modalEliminar && <ModalEliminar onClose={() => setModalEliminar(false)} />}
      {modalTraductor && <ModalTraductor onClose={() => setModalTraductor(false)} />}
    </div>
  );
}

export default Traductor;
