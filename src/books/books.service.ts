import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BooksService {
  private readonly googleBooksApiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.googleBooksApiKey = this.configService.get<string>('GOOGLE_BOOKS_API_KEY');
  }

  async findAll(): Promise<any> {
    // Implementación para obtener todos los libros
    // Puedes personalizar según sea necesario
    return []; // Aquí deberías implementar la lógica real para obtener todos los libros
  }

  async findOne(id: string): Promise<any> {
    // Implementación para obtener un libro por su ID
    // Puedes personalizar según sea necesario
    return null; // Aquí deberías implementar la lógica real para obtener un libro por su ID
  }

  async searchBook(title: string): Promise<any> {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${this.googleBooksApiKey}`;
    const response = await this.httpService.get(url).toPromise();
    return response.data;
  }
}
