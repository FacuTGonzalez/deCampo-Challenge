import { StatBar, StatBarContainer, StatName, StatRow, StatsContainer, StatTitle } from "./PokemonStatsCard.styles";
import type { PokemonStatsProps } from "./PokemonStatsCard.types";



const PokemonStatsCard = ({ stats }: PokemonStatsProps) => {
  return (
    <StatsContainer>
      <StatTitle>Base Stats</StatTitle>
      {stats.map((stat, idx) => (
        <StatRow key={idx}>
          <StatName>{stat.stat.name}</StatName>
          <StatBarContainer>
            <StatBar width={Math.min(stat.base_stat, 100)} />
          </StatBarContainer>
        </StatRow>
      ))}
    </StatsContainer>
  );
};

export default PokemonStatsCard;
