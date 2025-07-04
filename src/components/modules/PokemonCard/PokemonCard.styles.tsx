import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

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

export const StyledCard = styled(Link)`
  background: white;
  color: #2d3748;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 2px solid #e5e7eb;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  width: 300px;
  overflow: hidden;
  animation: ${fadeIn} 0.6s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const PokemonImg = styled.img`
  width: 150px;
  height: 150px;
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

export const PokemonTitle = styled.p`
  font-size: 1.75rem;
  font-weight: bold;
  text-align: center;
  color: #2d3748;
  margin-bottom: 1rem;
  text-transform: capitalize;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
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

export const WeightContainer = styled.div`
  text-align: center;
  color: #4a5568;
  font-size: 1rem;
`;

export const WeightLabel = styled.span`
  font-weight: 500;
`;

export const WeightValue = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #2d3748;
`;
