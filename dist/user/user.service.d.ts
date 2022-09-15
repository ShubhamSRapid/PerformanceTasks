import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";
export declare class UserService {
    private users;
    getUsers(): any[];
    createUser(createUserDto: CreateUserDto): User;
    getUserById(id: number): User;
    updatePassword(id: number, password: string): User;
    deleteUser(id: number): void;
}
