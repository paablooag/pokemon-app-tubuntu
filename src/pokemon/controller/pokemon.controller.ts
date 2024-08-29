import { Controller, Get, Post, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post('findByName')
  async findByName(@Body('name') name: string) {
    const result = await this.pokemonService.findByName(name);
    return result;
  }

  @Get('csv/:color')
  async getPokemonsByColor(@Param('color') color: string, @Res() res) {
    const pokemons = await this.pokemonService.getPokemonsByColor(color);
    const csv = pokemons.map(pokemon => `${pokemon.name};${pokemon.base_experience};${pokemon.height};${pokemon.weight}`).join('\n');
    res.setHeader('Content-Type', 'text/csv');
    res.status(HttpStatus.OK).send(csv);
  }
}
