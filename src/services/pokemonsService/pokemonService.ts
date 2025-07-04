import type { Pokemon, PokemonDetail } from "../../models/pokemon.model";
import api from "../api";
import { pokemonRoutes } from "./pokemonRoutes";

export const pokemonService = {
    getAllPokemons: async ({ limit, offset }: { limit: number, offset: number }): Promise<{ results: Pokemon[], count: number }> => {
        const response = await api.get(pokemonRoutes.getAllPokemons(limit, offset));
        return response.data;
    },
    getPokemonById: async (id: number) => {
        const response = await api.get(pokemonRoutes.getPokemonById(id));
        return response.data;
    },
    getPokemonByUrl: async (url: string): Promise<PokemonDetail> => {
        const response = await api.get(pokemonRoutes.getPokemonByUrl(url));
        return response.data;
    }
}