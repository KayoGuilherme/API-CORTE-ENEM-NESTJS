import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';

@Controller('course')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Post()
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursosService.createCourse(createCursoDto);
  }

  @Get()
  async getCourses(){
    return this.cursosService.getCourses();
  }
 
}
