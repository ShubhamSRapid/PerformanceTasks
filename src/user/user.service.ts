import { Injectable, Req } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return 'this is userService';
  }

  // createUser(req: Request) {
  //   return req.body;
  // }

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
