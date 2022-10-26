import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './types';
import { CreateMovieDto } from './dto/create-movie-dto';
import { UpdateMovieDto } from './dto/update-movie-dto';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  findAll(): Movie[] {
    return this.moviesService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id): Movie | string {
    return this.moviesService.findById(id);
  }

  @Post()
  create(@Body() createMovieDto: CreateMovieDto): Movie {
    return this.moviesService.create(createMovieDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id,
    @Body() updateMovieDto: UpdateMovieDto,
  ): Movie | string {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id) {
    return this.moviesService.delete(id);
  }
}
