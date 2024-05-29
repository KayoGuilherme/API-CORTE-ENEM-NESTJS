import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class LoginAuthDto {

    @IsNotEmpty()
    @IsEmail()
    email: string;


    @IsNotEmpty()
    @IsStrongPassword({
        minLength: 6
    })
    password: string

}
