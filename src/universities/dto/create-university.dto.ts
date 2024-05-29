import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUniversityDto {
  @IsNotEmpty()
  @IsString()
  nome_universidade: string;

  @IsNotEmpty()
  @IsNumber()
  category_id: number;
}
