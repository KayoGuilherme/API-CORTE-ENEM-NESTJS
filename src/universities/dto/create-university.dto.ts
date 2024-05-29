import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUniversityDto {
  @IsNotEmpty()
  @IsString()
  nome_universidade: string;
}
