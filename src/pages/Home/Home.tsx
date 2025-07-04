import React, { useState } from 'react'
import { useGetAllPokemons } from '../../services/pokemonsService/hooks/useGetAllPokemons';
import PokemonList from '../../components/modules/PokemonList/PokemonList';
import { Description, Header, HomeContainer } from './Home.styles';

export const HomeLayout = (): React.ReactNode => {
  const { pokemonList, page, limit, loading, setLimit, setPage, count } = useGetAllPokemons({ initialPage: 0, limit: 10, initialCount: 0 });

  return (
    <HomeContainer>
      <Header>
        <h2>Welcome to Pokédex</h2>
        <Description>Your adventure begins now! 🧢✨ <br />
          Search, discover, and learn all about your favorite Pokémon — from the tiniest Caterpie to the mightiest Charizard.<br />
          Are you ready? Let's GO! 🚀🔍
        </Description>
      </Header>

      <PokemonList>
        <PokemonList.Grid items={pokemonList} />
        <PokemonList.Paginator page={page} setPage={setPage} totalRecords={count} />
      </PokemonList>
    </HomeContainer>
  )
};
