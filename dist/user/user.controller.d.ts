import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";
import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): any[];
    createUser(createUserDto: CreateUserDto): User;
}
