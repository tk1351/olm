import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from '@prisma/client';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  async findAll(): Promise<Movie[]> {
    return await this.moviesService.findAll();
  }
}
