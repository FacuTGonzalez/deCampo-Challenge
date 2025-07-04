import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PokemonDetail, PokemonState } from '../../models/pokemon.model';
import type { RootState } from '../../store'; // Asegurate de tenerlo tipado

const initialState: PokemonState = {
  loading: false,
  error: null,
  selectedPokemon: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    resetPokemonState: () => initialState,

    setSelectedPokemon: (state, action: PayloadAction<PokemonDetail>) => {
      state.selectedPokemon = action.payload;
    },

    clearSelectedPokemon: (state) => {
      state.selectedPokemon = null;
    },
  },
});

export const {
  resetPokemonState,
  setSelectedPokemon,
  clearSelectedPokemon,
} = pokemonSlice.actions;

export const selectSelectedPokemon = (state: RootState) => state.pokemon.selectedPokemon;

export default pokemonSlice.reducer;
