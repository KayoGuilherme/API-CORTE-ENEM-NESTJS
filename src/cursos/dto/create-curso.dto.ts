import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCursoDto {
  @IsNotEmpty()
  @IsString()
  nome_curso: string;

  @IsNotEmpty()
  @IsString()
  descricao_curso: string;

  @IsNumber()
  @IsNotEmpty()
  nota_corte: number;

  @IsNotEmpty()
  @IsString()
  ano_nota_corte: string;

  @IsNotEmpty()
  @IsNumber()
  category_id;

  @IsNotEmpty()
  @IsNumber()
  universidade_id: number;
}
