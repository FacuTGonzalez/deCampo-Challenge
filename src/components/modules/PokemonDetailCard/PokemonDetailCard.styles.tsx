import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PokemonDetailCardContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: row;
  color: #2d3748;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 2px solid #e5e7eb;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  width: 900px;
  min-height: 500px;
  overflow: hidden;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    padding: 1.5rem;
    flex-direction: column;
    width: 400px;
    max-height: 500px;
    overflow-y: auto;
  }    
`


export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const PokemonImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  border-radius: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    animation: ${bounce} 0.6s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const PokemonInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 160px;
`

export const PokemonName = styled.p`
  font-size: 1.75rem;
  font-weight: bold;
  text-align: start;
  color: #2d3748;
  margin-bottom: 1rem;
  text-transform: capitalize;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SectionTitle = styled.p`
  margin-bottom: 0.5rem;
  margin-top: 0px;
  font-size: 18px;
  font-weight: bold;
`;

export const TypeContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-bottom: 1.5rem;
`;

export const TypeBadge = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: capitalize;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const SizeContainer = styled.div`
  text-align: start;
  color: #4a5568;
  font-size: 1rem;
`;

export const SizeLabel = styled.span`
  font-weight: 500;
`;

export const SizeValue = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #2d3748;
`;

export const StatsContainer = styled.div`
    width: 100%;
    padding-top: 4rem;
    margin-left: 4rem;

    @media (max-width: 768px) {
      margin-left: 0px;
  }  
`