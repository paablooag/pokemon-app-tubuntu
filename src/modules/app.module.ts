import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from '../service/app.service';
import { PokemonModule } from '../pokemon/modules/pokemon.module';

@Module({
  imports: [PokemonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
