import styled from "styled-components";

export const PokemonListContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`

export const PokemonsGrid = styled.div`
display: flex;
flex-wrap: wrap;
width: 90%;
gap:1rem;
justify-content: center;
max-height: 665px;
overflow-y: auto;
`