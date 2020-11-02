import {Role} from './Role';
import {User} from './User';

export class UserRole {
  role: Role;
  user: User;


  constructor(role: Role, user: User) {
    this.role = role;
    this.user = user;
  }
}
