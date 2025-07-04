import styled from "styled-components";

export const StatsContainer = styled.div`
  margin-top: 1.5rem;
`;

export const StatTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const StatRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const StatName = styled.span`
  width: 100px;
  font-size: 0.9rem;
  text-transform: capitalize;
`;

export const StatBarContainer = styled.div`
  background: #ddd;
  border-radius: 8px;
  height: 10px;
  width: 100%;
`;

export const StatBar = styled.div<{ width: number }>`
  height: 100%;
  border-radius: 8px;
  background-color: #4caf50;
  width: ${({ width }) => `${width}%`};
  transition: width 0.3s ease;
`;