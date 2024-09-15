import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function ModalTraductor({ onClose }) {
  const [palabra, setPalabra] = useState('');
  const [idioma, setIdioma] = useState('es');
  const [resultado, setResultado] = useState('');
  const dictionary = useSelector((state) => state.dictionary.dictionary);

  const handleTraducir = () => {
    const palabraTraducida = dictionary.find(
      (item) => item.es === palabra || item.en === palabra || item.pt === palabra
    );
    if (palabraTraducida) {
      setResultado(palabraTraducida[idioma]);
    } else {
      setResultado('No existe esa palabra en mi base de datos');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Traductor USIP</h3>
        <form>
          <label>Palabra a traducir:</label>
          <input type="text" value={palabra} onChange={(e) => setPalabra(e.target.value)} />
          <label>Idioma de traducción:</label>
          <select value={idioma} onChange={(e) => setIdioma(e.target.value)}>
            <option value="es">Español</option>
            <option value="en">Inglés</option>
            <option value="pt">Portugués</option>
          </select>
          <button type="button" onClick={handleTraducir}>Traducir</button>
          <textarea value={resultado} readOnly />
        </form>
        <button className="close" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default ModalTraductor;
