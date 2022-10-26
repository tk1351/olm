import {
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class UpdateMovieDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  imageSrc: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberString()
  year: string;
}
