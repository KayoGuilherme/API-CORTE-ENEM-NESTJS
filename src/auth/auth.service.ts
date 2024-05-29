import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly JWTService: JwtService,
    private readonly userService: UsersService,
  ) {}

  createToken(user: UserEntity) {
    return {
      acessToken: this.JWTService.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role,
        },
        {
          expiresIn: '1d',
          secret: process.env.JWT_SECRET,
          subject: String(user.id),
        },
      ),
    };
  }

  checkToken(token: string) {
    try {
      const data = this.JWTService.verify(token, {
        secret: String(process.env.JWT_SECRET),
      });

      return data;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async register(data: RegisterAuthDto) {
    const user = await this.userService.createUser(data);
    return this.createToken(user);
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findOneBy({
      email,
    });

    if (!user) {
      return new NotFoundException('Email ou senha incorretos');
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('E-mail e/ou senha incorretos.');
    }
    return this.createToken(user);
  }
}
