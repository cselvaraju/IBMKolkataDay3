import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userList: User[];
  // userService: UserService;

  constructor(private userService: UserService) {
    // this.userService = userService;
  }

  ngOnInit() {
    this.userList = this.userService.getUsers();
  }

}
