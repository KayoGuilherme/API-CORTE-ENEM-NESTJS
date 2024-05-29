import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Controller('course')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Post()
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursosService.createCourse(createCursoDto);
  }

  @Get()
  async getCourses() {
    return this.cursosService.getCourses();
  }

  @Get(':id_curso')
  async getCoursesById(@Param('id_curso') id_curso: number) {
    return this.cursosService.getCoursesById(id_curso);
  }

  @Put(':id_curso')
  async updateCourse(@Param('id_curso') id_curso: number, @Body() data: UpdateCursoDto){
    return this.cursosService.updateCourse(id_curso, data);
  }

  @Delete(':id_curso')
  async deleteCourse(@Param('id_curso') id_curso: number) {
    return this.cursosService.deleteCourse(id_curso);
  }
}
