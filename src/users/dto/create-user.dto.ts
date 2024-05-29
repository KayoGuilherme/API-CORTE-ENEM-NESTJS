import {
  IsDate,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  role: number;

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword({
    minLength: 6,
  })
  password: string;

  @IsEmpty()
  @IsDate()
  createdAt: string;

  @IsDate()
  @IsEmpty()
  updatedAt: string;
}
