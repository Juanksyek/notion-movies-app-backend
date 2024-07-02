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

  async searchBook(title: string): Promise<any> {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${title}`;
    const response = await this.httpService.get(url).toPromise();
    return response.data;
  }
}
