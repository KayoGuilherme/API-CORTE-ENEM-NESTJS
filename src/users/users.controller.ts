import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  async getUserId(@Param('id') id: number){
    return this.usersService.getUsersById(id)
  }

  @Put(':id')
  async updateUsers(@Param('id') id: number, @Body() data: UpdateUserDto) {
    return this.usersService.updateUsers(data, id);
  }

  @Delete(":id")
  async deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(id);
  }
}
