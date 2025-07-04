import type { PokemonCardDetailBaseProps, PokemonDetailProps } from './PokemonDetailCard.types';
import { ImageContainer, PokemonDetailCardContainer, PokemonImg, PokemonInfoContainer, PokemonName, TypeBadge, TypeContainer, SizeContainer, SizeLabel, SizeValue, SectionTitle, StatsContainer } from './PokemonDetailCard.styles';
import PokemonStatsCard from '../../elements/PokemonStatsCard/PokemonStatsCard';
import PokemonAbilities from '../../elements/PokemonAbilities/PokemonAbilities';

const PokemonDetailCard = ({ children }: PokemonDetailProps) => {
    return (
        <PokemonDetailCardContainer>{children}</PokemonDetailCardContainer>
    )
}

export const PokemonImage = ({ src, alt }: PokemonCardDetailBaseProps) => (
    <ImageContainer>
        <PokemonImg src={src ?? ''} alt={alt ?? ''} />
    </ImageContainer>
);

const PokemonType = ({ pokemon }: PokemonCardDetailBaseProps) => (
    <>
        <SectionTitle>Type</SectionTitle>
        <TypeContainer>
            {(pokemon?.types ?? []).map((t, idx) => (
                <TypeBadge key={idx}>{t.type.name}</TypeBadge>
            ))}
        </TypeContainer>
    </>

);

const PokemonSizes = ({ label, children }: PokemonCardDetailBaseProps) => (
    <SizeContainer>
        <SizeLabel>{label}: </SizeLabel>
        <SizeValue>{children}</SizeValue>
    </SizeContainer>
);

export const PokemonInfo = ({ pokemon }: PokemonCardDetailBaseProps) => (
    <PokemonInfoContainer>
        <PokemonName>
            {pokemon?.name}
        </PokemonName>
        <PokemonType pokemon={pokemon} />
        <>
            <SectionTitle>Size</SectionTitle>
            <PokemonSizes label='Weight'>{pokemon?.weight} kg</PokemonSizes>
            <PokemonSizes label='Height'>{pokemon?.height} mts</PokemonSizes>
        </>
        <PokemonAbilities abilities={pokemon?.abilities ?? []} />
    </PokemonInfoContainer>
)

export const PokemonStats = ({ pokemon }: PokemonCardDetailBaseProps) => (
    <StatsContainer>
        <PokemonStatsCard stats={pokemon?.stats ?? []} />
    </StatsContainer>

)

PokemonDetailCard.Image = PokemonImage
PokemonDetailCard.Info = PokemonInfo
PokemonDetailCard.Stats = PokemonStats

export default PokemonDetailCard;