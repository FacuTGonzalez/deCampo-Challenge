
import type { NamedAPIResource } from "./api.model";
import type { PokemonType, TypeDetail } from "./type.model";

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
  
  export type PokemonAbility = {
    is_hidden: boolean;
    slot: number;
    ability: NamedAPIResource; // Ability
  };
  
  
  export type PokemonTypePast = {
    generation: NamedAPIResource; // Generation
    types: PokemonType[];
  };
  
  export type PokemonAbilityPast = {
    generation: NamedAPIResource; // Generation
    abilities: PokemonAbility[] | null;
  };
  
  export type PokemonHeldItem = {
    item: NamedAPIResource; // Item
    version_details: PokemonHeldItemVersion[];
  };
  
  export type PokemonHeldItemVersion = {
    version: NamedAPIResource; // Version
    rarity: number;
  };
  
  export type PokemonMove = {
    move: NamedAPIResource; // Move
    version_group_details: PokemonMoveVersion[];
  };
  
  export type PokemonMoveVersion = {
    move_learn_method: NamedAPIResource;
    version_group: NamedAPIResource;
    level_learned_at: number;
    order?: number;
  };
  
  export type PokemonStat = {
    stat: NamedAPIResource;
    effort: number;
    base_stat: number;
  };
  
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
  
  export type PokemonCries = {
    latest: string;
    legacy: string;
  };
  
  export type VersionGameIndex = {
    game_index: number;
    version: NamedAPIResource;
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