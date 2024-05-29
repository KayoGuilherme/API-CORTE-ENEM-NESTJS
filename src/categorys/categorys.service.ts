import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategorysService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async createCategory(createCategoryDto: CreateCategoryDto) {
    try {
      const category = this.categoryRepository.create(createCategoryDto);
      return await this.categoryRepository.save(category);
    } catch (error) {
      console.log(error);
      throw new BadRequestException(
        'não foi possivel criar a categoria, por favor tente novamente outra hora',
      );
    }
  }

  async findAllCategories() {
    try {
      const category = await this.categoryRepository.find({
        relations: ['universities', 'cursos'],
      });
      return category;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(
        'não foi possivel encontrar as categorias, por favor tente novamente outra hora',
      );
    }
  }

  async findOneCategory(id: number) {}

  async updateCategory(id: number, updateCategoryDto: UpdateCategoryDto) {}

  async deleteCategory(id: number) {}
}
