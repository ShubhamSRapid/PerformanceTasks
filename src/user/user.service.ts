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
    const { id, username, password } = createUserDto;
    const user: User = {
      id,
      username,
      password,
    };
    this.users.push(user);

    return user;
  }

  getUserById(id: number): User {
    const found = this.users.find((user) => user.id === id);
    return found;
  }

  updatePassword(id: number, password: string): User {
    const user = this.getUserById(id);
    user.password = password;
    return user;
  }

  deleteUser(id: number) {
    const user = this.getUserById(id);
    this.users = this.users.filter((user) => user.id !== id);
  }
}
