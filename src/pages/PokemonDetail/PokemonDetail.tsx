import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectSelectedPokemon } from '../../store/slides/pokemonSlide';
import { BackButton, PokemonDetailContainer } from './PokemonDetail.styles';
import { pokemonService } from '../../services/pokemonsService/pokemonService';
import { useNavigate, useParams } from 'react-router-dom';
import type { PokemonDetail } from '../../models/pokemon.model';
import PokemonDetailCard from '../../components/modules/PokemonDetailCard/PokemonDetailCard';
import { Spinner } from '../../components/elements/Spinner/Spinner';


export const PokemonDetailLayout = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const pokemonStore = useAppSelector(selectSelectedPokemon);
    const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                if (id) {
                    const response = await pokemonService.getPokemonById(id);
                    setPokemon(response);
                }
            } catch (err) {
                console.warn(err)
            } finally {
                setLoading(false);
            }
        };
        if (pokemonStore) {
            return setPokemon(pokemonStore);
        }
        fetchData();
    }, []);


    const handleBack = () => {
        navigate(-1);
    }

    return (
        <>
            <BackButton
                label="← Back"
                onClick={handleBack}
            />
            <PokemonDetailContainer>
                {!pokemon && loading && (
                    <Spinner />)
                }
                {pokemon && !loading &&
                    <PokemonDetailCard>
                        <PokemonDetailCard.Image
                            src={pokemon?.sprites.front_default ?? ''}
                            alt={pokemon?.name ?? ''} />
                        <PokemonDetailCard.Info pokemon={pokemon} />
                        <PokemonDetailCard.Stats pokemon={pokemon} />
                    </PokemonDetailCard>
                }
            </PokemonDetailContainer>
        </>

    );
};
