import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class MoviesService {
  findOne(id: string) {
      throw new Error("Method not implemented.");
  }
  findAll() {
      throw new Error("Method not implemented.");
  }
  private readonly omdbApiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.omdbApiKey = this.configService.get<string>('OMDB_API_KEY');
  }

  async searchMovie(title: string): Promise<any> {
    const url = `http://www.omdbapi.com/?t=${title}&apikey=${this.omdbApiKey}`;
    const response = await lastValueFrom(this.httpService.get(url));
    return response.data;
  }
}
