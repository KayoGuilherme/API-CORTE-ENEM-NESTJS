import { Module } from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { UniversitiesController } from './universities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniversityEntity } from './entities/university.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UniversityEntity])],
  controllers: [UniversitiesController],
  providers: [UniversitiesService],
})
export class UniversitiesModule {}
