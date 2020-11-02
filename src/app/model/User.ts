import {BasicModel} from './BasicModel';
import {UserRole} from './UserRole';

export class User extends BasicModel {

  username: string;
  email: string;
  password: string;
  created: Date;
  userRolesList: UserRole[] = [];


  constructor(id: number, userName: string, email: string, password: string, created: Date) {
    super(id);
    this.username = userName;
    this.email = email;
    this.password = password;
    this.created = created;
  }
}
