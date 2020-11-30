import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/service/user/user.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  // -------------------------------------------------------------------------
  // Dependency Injection

  constructor(
    private userService: UserService
  ) { }

  // -------------------------------------------------------------------------
  // Events

  public ngOnInit() {
    this.fetchUsers();
  }

  /**
   * @function fetchUsers
   * Method to fetch users
   */
  private fetchUsers() {
    this.userService.fetchUsers().then((response) => {
      console.log("response", response)
    });
  }

}
