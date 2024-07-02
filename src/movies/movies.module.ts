import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { HttpModule } from '@nestjs/axios'; // Importa HttpModule si estás usando Axios

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
  imports: [
    HttpModule, // Asegúrate de importar HttpModule aquí si usas Axios
    // Otros módulos necesarios
  ],
})
export class MoviesModule {}
