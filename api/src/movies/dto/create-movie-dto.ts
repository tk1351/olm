import { IsNotEmpty, IsNumberString, IsString, IsUrl } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  imageSrc: string;

  @IsNotEmpty()
  @IsNumberString()
  year: string;
}
