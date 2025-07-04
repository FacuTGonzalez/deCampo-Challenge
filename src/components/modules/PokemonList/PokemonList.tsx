import React, { useState } from 'react';
import { Paginator, type PaginatorPageChangeEvent } from 'primereact/paginator';
import type { PokemonDetail } from '../../../models/pokemon.model';
import PokemonCard from '../PokemonCard/PokemonCard';
import { PokemonListContainer, PokemonsGrid } from './PokemonList.styles';

// Componente principal como contenedor
interface PokemonListProps {
    children: React.ReactNode;
}

const PokemonList = ({ children }: PokemonListProps) => {
    return (
        <PokemonListContainer>
            {children}
        </PokemonListContainer>
    );
};

interface GridProps {
    items: PokemonDetail[];
}

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

interface PaginatorProps {
    page: number;
    setPage: (page: number) => void;
    totalRecords: number;
    template?: string;
}

const PaginatorComponent = ({ 
    page,
    setPage,
    totalRecords,
    template = "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
}: PaginatorProps) => {
    const [rows, setRows] = useState(10);
    const onPageChange = (event: PaginatorPageChangeEvent): void => {
        setPage(event.page);
        setRows(event.rows);
    };

    return (
        <Paginator
            first={page * rows}
            rows={rows}
            totalRecords={totalRecords}
            onPageChange={onPageChange}
            template={template}
            currentPageReportTemplate={`{totalRecords} results`}
        />
    );
};

PokemonList.Grid = Grid;
PokemonList.Paginator = PaginatorComponent;

export default PokemonList;
