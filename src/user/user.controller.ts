import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  // @Post()
  // createUser() {
  //   return this.userService.createUser(req);
  // }

  // @Patch('/:id')
  // Update(@Req() req: Request, @Param() params: { id: number }) {
  //   return this.userService.update(req, params);
  // }

  // @Get('/:id')
  // getUser(@Param() params: { id: number }) {
  //   return this.userService.getUser(params);
  // }

  // @Delete('/:id')
  // deleteUser(@Param() params: { id: number }) {
  //   return this.userService.deleteUser(params);
  // }
}
