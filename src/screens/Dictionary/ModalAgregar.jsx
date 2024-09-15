import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { agregarPalabra } from '../../redux/dictionarySlice';

function ModalAgregar({ onClose }) {
  const [es, setEs] = useState('');
  const [en, setEn] = useState('');
  const [pt, setPt] = useState('');
  const dispatch = useDispatch();

  const handleAgregar = () => {
    dispatch(agregarPalabra({ es, en, pt }));
    onClose(); 
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Traductor USIP</h3>
        <form>
          <label>Español:</label>
          <input type="text" value={es} onChange={(e) => setEs(e.target.value)} />
          <label>Inglés:</label>
          <input type="text" value={en} onChange={(e) => setEn(e.target.value)} />
          <label>Portugués:</label>
          <input type="text" value={pt} onChange={(e) => setPt(e.target.value)} />
          <button type="button" onClick={handleAgregar}>Agregar</button>
        </form>
        <button className="close" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default ModalAgregar;
