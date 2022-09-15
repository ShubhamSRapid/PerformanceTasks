import { IsNumber, IsString, MinLength, MaxLength } from "class-validator";

export class CreateUserDto {
  @IsNumber()
  id: number;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  password: string;
}
