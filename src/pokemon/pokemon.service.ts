import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PokemonService {
  private readonly pokeApiUrl = 'https://pokeapi.co/api/v2';

  async findByName(name: string) {
    try {
      const response = await axios.get(`${this.pokeApiUrl}/pokemon/${name.toLowerCase()}`);
      const pokemon = response.data;
      return {
        count: 1,
        results: [
          {
            base_experience: pokemon.base_experience,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
          },
        ],
      };
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new HttpException('Pokemon not found', HttpStatus.NOT_FOUND);
      }
      throw new HttpException('Error fetching data from PokeAPI', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getPokemonsByColor(color: string) {
    try {
      const response = await axios.get(`${this.pokeApiUrl}/pokemon-color/${color.toLowerCase()}`);
      const pokemonSpecies = response.data.pokemon_species;

      const pokemonDetails = await Promise.all(
        pokemonSpecies.map(async (species) => {
          const pokemonResponse = await axios.get(species.url.replace('pokemon-species', 'pokemon'));
          const pokemon = pokemonResponse.data;
          return {
            name: pokemon.name,
            base_experience: pokemon.base_experience,
            height: pokemon.height,
            weight: pokemon.weight,
          };
        }),
      );

      // Ordenar por base_experience
      pokemonDetails.sort((a, b) => a.base_experience - b.base_experience);

      return pokemonDetails;
    } catch (error) {
      throw new HttpException('Error fetching data from PokeAPI', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

