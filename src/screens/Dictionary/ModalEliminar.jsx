import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { eliminarPalabra } from '../../redux/dictionarySlice';

function ModalEliminar({ onClose }) {
  const [palabra, setPalabra] = useState('');
  const dispatch = useDispatch();
  const dictionary = useSelector((state) => state.dictionary.dictionary);

  const handleEliminar = () => {
    if (dictionary.some(item => item.es === palabra || item.en === palabra || item.pt === palabra)) {
      dispatch(eliminarPalabra(palabra));
      alert('Palabra eliminada correctamente');
    } else {
      alert('No existe esa palabra en mi base de datos');
    }
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Traductor USIP</h3>
        <form>
          <label>Palabra:</label>
          <input type="text" value={palabra} onChange={(e) => setPalabra(e.target.value)} />
          <button type="button" onClick={handleEliminar}>Eliminar</button>
        </form>
        <button className="close" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default ModalEliminar;
