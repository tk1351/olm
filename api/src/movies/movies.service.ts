import { Injectable } from '@nestjs/common';
import { Movie } from './types';

@Injectable()
export class MoviesService {
  private readonly movies: Movie[] = [
    { id: 1, title: 'title', originalTitle: 'original title', year: '2022' },
  ];

  findAll(): Movie[] {
    return this.movies;
  }
}
