// Tipos básicos reutilizables

import type { NamedAPIResource } from "./api.model";
import type { PokemonType, TypeDetail } from "./type.model";

  
  // Detalles del Pokémon
  export type PokemonDetail = {
    id: string;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: PokemonAbility[];
    forms: NamedAPIResource[];
    game_indices: VersionGameIndex[];
    held_items: PokemonHeldItem[];
    location_area_encounters: string;
    moves: PokemonMove[];
    past_types: PokemonTypePast[];
    past_abilities: PokemonAbilityPast[];
    sprites: PokemonSprites;
    cries: PokemonCries;
    species: NamedAPIResource;
    stats: PokemonStat[];
    types: PokemonType[];
    typeDetail: TypeDetail[];
  };
  
  // Habilidades del Pokémon
  export type PokemonAbility = {
    is_hidden: boolean;
    slot: number;
    ability: NamedAPIResource; // Ability
  };
  
  // Tipos actuales

  
  // Tipos pasados por generación
  export type PokemonTypePast = {
    generation: NamedAPIResource; // Generation
    types: PokemonType[];
  };
  
  // Habilidades pasadas por generación
  export type PokemonAbilityPast = {
    generation: NamedAPIResource; // Generation
    abilities: PokemonAbility[] | null;
  };
  
  // Ítems que puede tener
  export type PokemonHeldItem = {
    item: NamedAPIResource; // Item
    version_details: PokemonHeldItemVersion[];
  };
  
  export type PokemonHeldItemVersion = {
    version: NamedAPIResource; // Version
    rarity: number;
  };
  
  // Movimientos que puede aprender
  export type PokemonMove = {
    move: NamedAPIResource; // Move
    version_group_details: PokemonMoveVersion[];
  };
  
  export type PokemonMoveVersion = {
    move_learn_method: NamedAPIResource; // MoveLearnMethod
    version_group: NamedAPIResource; // VersionGroup
    level_learned_at: number;
    order?: number;
  };
  
  // Stats base
  export type PokemonStat = {
    stat: NamedAPIResource; // Stat
    effort: number;
    base_stat: number;
  };
  
  // Sprites
  export type PokemonSprites = {
    front_default: string | null;
    front_shiny: string | null;
    front_female: string | null;
    front_shiny_female: string | null;
    back_default: string | null;
    back_shiny: string | null;
    back_female: string | null;
    back_shiny_female: string | null;
  };
  
  // Cries (sonidos)
  export type PokemonCries = {
    latest: string;
    legacy: string;
  };
  
  // Índices del juego
  export type VersionGameIndex = {
    game_index: number;
    version: NamedAPIResource; // Version
  };
  
  
  export interface PokemonState {
    loading: boolean;
    error: string | null;
    selectedPokemon: PokemonDetail | null;
  }

  export interface Pokemon {
    name: string;
    url: string;
  }