import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: User[];

  constructor() {
    this.userList = [
      { name: 'Amitabh Bachhan', city: 'Mumbai' },
      { name: 'Priyanka Chopra', city: 'New Delhi' },
      { name: 'Denzel Washington', city: 'Hollywood' }
    ];
  }

  getUsers(): User[] {
    return this.userList;
  }
}
