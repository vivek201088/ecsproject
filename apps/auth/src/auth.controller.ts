import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from './user/dto/create-user.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

   @Post('login')
  async login(
    @Body() loginDto: LoginDto,
  ) {
    return this.authService.login(loginDto);
  }

   @Post('register')
  async register(
    @Body()
    createUserDto: CreateUserDto,
  ) {
    return this.authService.register(
      createUserDto,
    );
  }
}
