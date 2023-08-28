import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {

  const pokemonToDisplay = pokemon.map(mon => <PokemonCard key={mon.id} pokemon={mon} />)

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonToDisplay}
    </Card.Group>
  );
}

export default PokemonCollection;
