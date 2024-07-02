import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { BooksService } from './books.service';

@Module({
  imports: [
    HttpModule, // Importa HttpModule para poder utilizar HttpService
    ConfigModule, // Asegúrate de importar ConfigModule si aún no está importado en tu aplicación
  ],
  providers: [BooksService], // Registra el servicio BooksService
  exports: [BooksService], // Exporta BooksService para que esté disponible para otros módulos
})
export class BooksModule {}
