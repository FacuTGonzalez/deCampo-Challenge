import { Button } from "primereact/button";
import styled from "styled-components";

export const PokemonDetailContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 100vw;
    min-height: 90vh;
`
export const BackButton = styled(Button)`
    background-color: #4a5568;
    border-color: #4a5568;
    margin: 1rem;
`