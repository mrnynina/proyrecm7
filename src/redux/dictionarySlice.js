import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dictionary: [],
};

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    agregarPalabra: (state, action) => {
      state.dictionary.push(action.payload);
    },
    eliminarPalabra: (state, action) => {
      const palabra = action.payload;
      state.dictionary = state.dictionary.filter(
        (item) => item.es !== palabra && item.en !== palabra && item.pt !== palabra
      );
    },
  },
});

export const { agregarPalabra, eliminarPalabra } = dictionarySlice.actions;
export default dictionarySlice.reducer;
