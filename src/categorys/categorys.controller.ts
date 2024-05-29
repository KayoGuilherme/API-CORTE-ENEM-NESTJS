import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategorysService } from './categorys.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categorys')
export class CategorysController {
  constructor(private readonly categorysService: CategorysService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categorysService.createCategory(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categorysService.findAllCategories();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
   
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    
  }
}
