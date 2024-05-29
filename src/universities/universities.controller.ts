import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';

@Controller('universities')
export class UniversitiesController {
  constructor(private readonly universitiesService: UniversitiesService) {}

  @Post()
  async addUniversitie(@Body() data: CreateUniversityDto) {
    return this.universitiesService.createUniversities(data);
  }

  @Get()
  async getUniversities() {
    return this.universitiesService.getUniversities();
  }

  @Get(':id_universidade')
  async getUniversitiesById(@Param('id_universidade') id_universidade: number) {
    return this.universitiesService.getUniversitieById(id_universidade);
  }

  @Put(':id_universidade')
  async updateUniversitie(
    @Param('id_universidade') id_universidade: number,
    @Body() { nome_universidade, category_id }: UpdateUniversityDto,
  ) {
    return this.universitiesService.updateUniversitie(
      id_universidade,
      nome_universidade,
      category_id,
    );
  }

  @Delete(':id_universidade')
  async deleteUniversitie(@Param('id_universidade') id_universidade: number) {
    return this.universitiesService.deleteUniversitie(id_universidade);
  }
}
