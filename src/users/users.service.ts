import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

const LINE_AFFECTED = 1;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(data: CreateUserDto) {
    if (
      await this.userRepository.findOneBy({
        email: data.email,
      })
    ) {
      throw new BadRequestException('Este e-mail já está sendo usado.');
    }

    const salt = await bcrypt.genSalt();

    data.password = await bcrypt.hash(data.password, salt);

    const user = this.userRepository.create(data);
    console.log(user);

    return this.userRepository.save(user);
  }

  async getUsers() {
    try {
      const users = await this.userRepository.find();
      return users;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Nao foi possivel listar os usuarios');
    }
  }

  async getUsersById(id: number) {
    try {
      const users = await this.userRepository.exists({
        where: {
          id,
        },
      });
      if (!users) {
        return new NotFoundException(
          `o usuario do id: ${id} nao foi encontrado`,
        );
      }

      return users;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Nao foi possivel listar usuario');
    }
  }

  async updateUsers(data: UpdateUserDto, id: number) {
    try {
      const exist = await this.userRepository.exists({
        where: {
          id,
        },
      });
      if (!exist) {
        return new NotFoundException(
          `o usuario do id: ${id} nao foi encontrado`,
        );
      }
      const users = this.userRepository.update(Number(id), {
        name: data.name,
        email: data.email,
        password: await bcrypt.hash(data.password, await bcrypt.genSalt()),
        role: data.role,
      });

      return users;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(id: number) {
    try {
      const exist = await this.userRepository.exists({
        where: {
          id,
        },
      });
      if (!exist) {
        return new NotFoundException(
          `o usuario do id: ${id} nao foi encontrado`,
        );
      }

      await this.userRepository.delete(id);
      return {
        row: [],
        affected: LINE_AFFECTED,
      };
    } catch (error) {
      console.log(error);
      throw new BadRequestException('nao foi possivel deletar o usuario');
    }
  }
}
