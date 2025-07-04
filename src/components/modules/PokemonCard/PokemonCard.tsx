import React, { useCallback, type ReactNode } from 'react';
import {
    ImageContainer,
    PokemonImg,
    PokemonTitle,
    StyledCard,
    TypeBadge,
    TypeContainer,
    WeightContainer,
    WeightLabel,
    WeightValue
} from './PokemonCard.styles';
import { Link } from 'react-router-dom';

import type { PokemonType } from '../../../models/type.model';
import type { PokemonDetail } from '../../../models/pokemon.model';
import { useAppDispatch } from '../../../store/hooks';
import { setSelectedPokemon } from '../../../store/slides/pokemonSlide';

export interface PokemonCardBaseProps {
    pokemon?: PokemonDetail;
    children?: ReactNode;
    src?: string;
    alt?: string;
    types?: PokemonType[];
}

const PokemonCard = ({ pokemon, children }: PokemonCardBaseProps) => {

    const dispatch = useAppDispatch();
    const handleSelectPokemon = useCallback(() => {
        if (pokemon) {
          dispatch(setSelectedPokemon(pokemon));
        }
      }, [dispatch, pokemon]);
      

    return (
        <StyledCard as={Link} to={`/pokemon/${pokemon?.id}`} onClick={handleSelectPokemon}>
            {children}
        </StyledCard>
    )
};

const PokemonImage = ({ src, alt }: PokemonCardBaseProps) => (
    <ImageContainer>
        <PokemonImg src={src ?? ''} alt={alt ?? ''} />
    </ImageContainer>
);

const PokemonName = ({ children }: PokemonCardBaseProps) => (
    <PokemonTitle>{children}</PokemonTitle>
);

const PokemonType = ({ types }: PokemonCardBaseProps) => (
    <TypeContainer>
        {(types ?? []).map((t, idx) => (
            <TypeBadge key={idx}>{t.type.name}</TypeBadge>
        ))}
    </TypeContainer>
);

const PokemonWeight = ({ children }: PokemonCardBaseProps) => (
    <WeightContainer>
        <WeightLabel>Weight: </WeightLabel>
        <WeightValue>{children}</WeightValue>
    </WeightContainer>
);

PokemonCard.Image = PokemonImage;
PokemonCard.Name = PokemonName;
PokemonCard.Type = PokemonType;
PokemonCard.Weight = PokemonWeight;

export default PokemonCard;
