import { Entity } from "typeorm";

@Entity()
export class User {
  username: string;
  password: string;
}
