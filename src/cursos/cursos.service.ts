import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CursoEntity } from './entities/curso.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';
const LINE_AFFECTED = 1;


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

  async getCourses() {
    try {
      const course = await this.courseRepository.find();
      return course;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('nao foi possivel listar os cursos');
    }
  }

  async getCoursesById(id_curso: number) {
    try {
      const findCourse = await this.courseRepository.findOneBy({
        id_curso,
      });

      if (!findCourse) {
        return new NotFoundException(' course not found!');
      }

      return findCourse;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(
        'nao foi possivel listar o curso requerido.',
      );
    }
  }

  async updateCourse(id_curso: number, data: UpdateCursoDto) {
    try {
      const findCourse = await this.courseRepository.findOneBy({
        id_curso,
      });

      if (!findCourse) {
        return new NotFoundException(' course not found!');
      }

      await this.courseRepository.update(id_curso, {
        nome_curso: data.nome_curso,
        descricao_curso: data.descricao_curso,
        nota_corte: data.nota_corte,
        ano_nota_corte: data.ano_nota_corte,
        universidade_id: data.universidade_id,
        category_id: data.category_id,
      });

      return { sucess: true };
    } catch (error) {
      console.log(error);
      throw new BadRequestException(
        'nao foi possivel atualizar o curso requerido.',
      );
    }
  }

  async deleteCourse(id_curso: number) {
    const findCourse = await this.courseRepository.findOneBy({
      id_curso,
    });

    if (!findCourse) {
      return new NotFoundException(' course not found!');
    }

    await this.courseRepository.delete({ id_curso });

    return {
      row: [],
      affected: LINE_AFFECTED,
    };
  }
}
