import { Injectable, Req } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  private users = [];

  getUsers() {
    return this.users;
  }

  createUser(createUserDto: CreateUserDto) {
    const { username, password } = createUserDto;
    const user: User = {
      username,
      password,
    };
    this.users.push(user);
    console.log(user);

    return user;
  }

  // update(req: Request, params: { id: number }) {
  //   return { body: req.body, params };
  // }

  // getUser(params: { id: number }) {
  //   return params;
  // }

  // deleteUser(params: { id: number }) {
  //   return params;
  // }
}
