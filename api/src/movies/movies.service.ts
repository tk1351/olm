import { Injectable } from '@nestjs/common';
import { Movie } from './types';
import { CreateMovieDto } from './dto/create-movie-dto';
import { UpdateMovieDto } from './dto/update-movie-dto';

@Injectable()
export class MoviesService {
  private readonly movies: Movie[] = [
    {
      id: 1,
      title: 'title',
      imageSrc: '',
      year: '2022',
    },
  ];

  findAll(): Movie[] {
    return this.movies;
  }

  findById(id: number): Movie | string {
    const movie = this.movies.find((movie) => movie.id === id);

    if (!movie) return 'Not found';
    return movie;
  }

  create(createMovieDto: CreateMovieDto): Movie {
    const newMovie = { id: this.movies.length + 1, ...createMovieDto };
    this.movies.push(newMovie);
    return newMovie;
  }

  update(id: number, updateMovieDto: UpdateMovieDto): Movie | string {
    const isEmptyDto = Object.keys(updateMovieDto).length === 0;
    if (isEmptyDto) return 'Update data is not found';

    const targetMovie = this.movies.find((movie) => movie.id === id);
    if (!targetMovie) return 'Not Found';

    const { title, imageSrc, year } = updateMovieDto;

    targetMovie.title = !title ? targetMovie.title : title;
    targetMovie.imageSrc = !imageSrc ? targetMovie.imageSrc : imageSrc;
    targetMovie.year = !year ? targetMovie.year : year;

    return targetMovie;
  }

  delete(id: number) {
    return this.movies.filter((movie) => movie.id !== id);
  }
}
