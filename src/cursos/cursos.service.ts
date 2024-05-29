import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CursoEntity } from './entities/curso.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(CursoEntity)
    private readonly courseRepository: Repository<CursoEntity>,
  ) {}
  async createCourse(data: CreateCursoDto) {
    try {
      const course = this.courseRepository.create(data);
      console.log(course);
      return await this.courseRepository.save(course);
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Não foi possivel cadastrar o curso.');
    }
  }

  async getCourses(){
    const course = await this.courseRepository.find();
    return course;
  }
}
