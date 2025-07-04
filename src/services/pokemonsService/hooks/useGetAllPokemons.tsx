import { useEffect, useState } from 'react';
import type { Pokemon, PokemonDetail } from '../../../models/pokemon.model';
import { pokemonService } from '../pokemonService';
import { typeService } from '../../typeService/typeService';
import type { PokemonType } from '../../../models/type.model';

type UseGetAllPokemonsReturn = {
    pokemonList: PokemonDetail[];
    loading: boolean;
    page: number;
    setPage(value: number): void;
    limit: number;
    setLimit(value: number): void;
    error: string | null;
    count: number;
};

type UseGetAllPokemonsProps = {
    limit?: number;
    initialPage?: number;
    initialCount?: number
};

export const useGetAllPokemons = ({
    limit: initialLimit = 10,
    initialPage = 0,
    initialCount=0
}: UseGetAllPokemonsProps = {}): UseGetAllPokemonsReturn => {
    const [pokemonList, setPokemonList] = useState<PokemonDetail[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [page, setPage] = useState<number>(initialPage);
    const [limit, setLimit] = useState<number>(initialLimit);
    const [count, setCount] = useState<number>(initialCount)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {

                const offset = page * limit;
                const response = await pokemonService.getAllPokemons({ limit, offset });
                const data = response.results;

                const details: PokemonDetail[] = await Promise.all(
                    data.map(async (pokemon: Pokemon) => {
                        const res = await pokemonService.getPokemonByUrl(pokemon.url);
                        return res;
                    })
                );

                setPokemonList(details);
                setCount(response.count)
            } catch (err) {
                setError('Error fetching Pokémon');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [page, limit]);

    return {
        pokemonList,
        loading,
        page,
        setPage,
        limit,
        setLimit,
        error,
        count
    };
};
