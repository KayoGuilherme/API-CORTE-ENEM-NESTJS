import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';


@Controller('')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerAuthDto: RegisterAuthDto ) {
    return this.authService.register(registerAuthDto)
  }

  @Post('login')
  async login(@Body() {email, password}: LoginAuthDto) {
    return this.authService.login(email, password)
  }
}
