import {
  IsDateString,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  description!: string;

  @IsDateString()
  eventDate!: Date;
}