import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(to bottom, #000000, rgba(80, 80, 80, 0.2));
    width: 100%;
    color: white;
    margin-bottom: 2rem;
`;

export const Description = styled.p`
    text-align: center;
`;
