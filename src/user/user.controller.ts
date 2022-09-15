import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller("/user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): User {
    return this.userService.createUser(createUserDto);
  }

  @Get("/:id")
  getUser(@Param("id") id: number): User {
    return this.userService.getUserById(id);
  }

  @Patch("/:id/password")
  changePassword(@Param("id") id: number, @Body("password") password: string) {
    return this.userService.updatePassword(id, password);
  }

  @Delete("/:id")
  deleteUser(@Param("id") id: number) {
    return this.userService.deleteUser(id);
  }
}
