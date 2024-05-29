import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { CreateUniversityDto } from './dto/create-university.dto';


@Controller('universities')
export class UniversitiesController {
  constructor(private readonly universitiesService: UniversitiesService) {}

  @Post()
  async addUniversitie(@Body() data: CreateUniversityDto) {
    return this.universitiesService.createUniversities(data);
  }

  @Get()
  async getUniversities(){
    return this.universitiesService.getUniversities();
  }

}
