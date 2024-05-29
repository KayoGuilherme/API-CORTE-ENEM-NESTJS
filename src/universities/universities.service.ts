import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UniversityEntity } from './entities/university.entity';
import { Repository } from 'typeorm';

const LINE_AFFECTED = 1;

@Injectable()
export class UniversitiesService {
  constructor(
    @InjectRepository(UniversityEntity)
    private readonly universitiesRepository: Repository<UniversityEntity>,
  ) {}

  async createUniversities(data: CreateUniversityDto) {
    try {
      const universitie = this.universitiesRepository.create(data);
      return await this.universitiesRepository.save(universitie);
    } catch (error) {
      console.log(error);
      throw new BadRequestException(
        'Não foi possivel cadastrar a universidade',
      );
    }
  }

  async getUniversities() {
    const universitie = await this.universitiesRepository.find({
      relations: ['cursos'],
    });
    return universitie;
  }

  async getUniversitieById(id_universidade: number) {
    try {
      const universitie = await this.universitiesRepository.findOne({
        where: {
          id_universidade,
        },
      });

      if (!universitie) {
        return new NotFoundException('universitie Not found!');
      }

      return universitie;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(
        'nao foi possivel listar universidade requerida.',
      );
    }
  }

  async updateUniversitie(
    id_universidade: number,
    nome_universidade: string,
    category_id: number,
  ) {
    try {
      const find = await this.universitiesRepository.findOneBy({
        id_universidade,
      });

      if (!find) {
        return new NotFoundException('universitie not found');
      }

      const universitie = await this.universitiesRepository.update(
        Number(id_universidade),
        {
          nome_universidade,
          category_id,
        },
      );

      return universitie;
    } catch (e) {
      console.log(e);
      throw new BadRequestException(
        'nao foi possivel atualizar universidade requerida.',
      );
    }
  }

  async deleteUniversitie(id_universidade: number) {
    try {
      const find = await this.universitiesRepository.findOneBy({
        id_universidade,
      });

      if (!find) {
        return new NotFoundException('universitie not found');
      }
      await this.universitiesRepository.delete({ id_universidade });

      return {
        row: [],
        affected: LINE_AFFECTED,
      };
    } catch (e) {
      console.log(e);
      throw new BadRequestException(
        'nao foi possivel deletar universidade requerida.',
      );
    }
  }
}
