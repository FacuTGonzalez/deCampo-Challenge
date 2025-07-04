import PokemonCard from '../PokemonCard/PokemonCard';
import { PokemonListContainer, PokemonsGrid } from './PokemonList.styles';
import type { GridProps, PokemonListProps } from './PokemonList.types';
import PaginatorComponent from '../../elements/Paginator/PaginatorComponent';



const PokemonList = ({ children }: PokemonListProps) => {
    return (
        <PokemonListContainer>
            {children}
        </PokemonListContainer>
    );
};


const Grid = ({ items }: GridProps) => {
    return (
        <PokemonsGrid>
            { items.map((item, index) => (
                <PokemonCard pokemon={item} key={`${item.id}-${index}`}>
                    <PokemonCard.Image 
                        src={item.sprites.front_default ?? ''} 
                        alt={item.name ?? ''} 
                    />
                    <PokemonCard.Name>{item.name}</PokemonCard.Name>
                    <PokemonCard.Type types={item.types} />
                    <PokemonCard.Weight>{item.weight} kg</PokemonCard.Weight>
                </PokemonCard>
            ))}
        </PokemonsGrid>
    );
};


PokemonList.Grid = Grid;
PokemonList.Paginator = PaginatorComponent;

export default PokemonList;
