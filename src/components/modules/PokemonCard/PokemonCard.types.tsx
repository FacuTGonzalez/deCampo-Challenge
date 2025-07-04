import type { ReactNode } from "react";
import type { PokemonDetail } from "../../../models/pokemon.model";
import type { PokemonType } from "../../../models/type.model";

export interface PokemonCardBaseProps {
    pokemon?: PokemonDetail;
    children?: ReactNode;
    src?: string;
    alt?: string;
    types?: PokemonType[];
}