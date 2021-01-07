import { Subject } from 'rxjs';
import { User } from '../app/user'

export class UserService {
  private users: User[] = [new User('anouar', '0000')];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
