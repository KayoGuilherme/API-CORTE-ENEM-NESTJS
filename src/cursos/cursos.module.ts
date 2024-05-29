import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursoEntity } from './entities/curso.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CursoEntity])],
  controllers: [CursosController],
  providers: [CursosService],
})
export class CursosModule {}
