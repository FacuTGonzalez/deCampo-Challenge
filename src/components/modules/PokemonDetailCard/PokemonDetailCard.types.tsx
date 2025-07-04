import type React from "react";
import type { PokemonDetail } from "../../../models/pokemon.model";
import type { ReactNode } from "react";

export interface PokemonDetailProps {
    children: React.ReactNode
}

export interface PokemonCardDetailBaseProps {
    pokemon?: PokemonDetail;
    children?: ReactNode;
    src?: string;
    alt?: string;
    label?:string;
}