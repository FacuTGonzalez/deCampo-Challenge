export const pokemonRoutes = {
    getAllPokemons: (limit: number, offset: number) => `/pokemon?limit=${limit}&offset=${offset}`,
    getPokemonById: (id: number) => `/pokemon/${id}`,
    getPokemonByUrl: (url: string) => url,
}