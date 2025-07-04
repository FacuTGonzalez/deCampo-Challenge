import type { PokemonAbilitiesProps } from './PokemonAbilities.types';
import { AbilitiesContainer, AbilityItem, AbilityList, AbilityTitle } from './PokemonAbilities.styles';




const PokemonAbilities = ({ abilities }:PokemonAbilitiesProps) => {
  return (
    <AbilitiesContainer>
      <AbilityTitle>Abilities</AbilityTitle>
      <AbilityList>
        {abilities.map((a, idx) => (
          <AbilityItem key={idx}>
            {a.ability.name}
            {a.is_hidden && ' (Hidden)'}
          </AbilityItem>
        ))}
      </AbilityList>
    </AbilitiesContainer>
  );
};

export default PokemonAbilities;
