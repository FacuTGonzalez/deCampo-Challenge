export const pokemonRoutes = {
    getAllPokemons: (limit: number, offset: number) => `/pokemon?limit=${limit}&offset=${offset}`,
    getPokemonById: (id: string) => `/pokemon/${id}`,
    getPokemonByUrl: (url: string) => url,
}