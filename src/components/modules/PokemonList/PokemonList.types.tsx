import type { PokemonDetail } from "../../../models/pokemon.model";

export interface PokemonListProps {
    children: React.ReactNode;
}

export interface GridProps {
    items: PokemonDetail[];
}