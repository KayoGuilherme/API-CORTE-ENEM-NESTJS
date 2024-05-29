import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UniversityEntity } from './entities/university.entity';
import { Repository } from 'typeorm';

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
      throw new BadRequestException("Não foi possivel cadastrar a universidade")
    }
  }

  async getUniversities(){
    const universitie = await this.universitiesRepository.find({
      relations:['cursos']
    })
    return universitie;
  }
}
