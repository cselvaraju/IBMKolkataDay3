import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { ObservableUserService } from '../../services/observableUser.service';

@Component({
  selector: 'app-observableuser',
  templateUrl: './observableuser.component.html',
  styleUrls: ['./observableuser.component.css']
})
export class ObservableuserComponent implements OnInit {

  userList: User[];

  constructor(private observableUserService: ObservableUserService) { }

  ngOnInit() {
    this.observableUserService.getUsers().subscribe(users =>
      this.userList = users);
  }

}
