import { Component, OnInit } from '@angular/core';
import { UserService } from '@providers/service/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // -------------------------------------------------------------------------
  // Dependency Injection

  constructor(private userService: UserService) { }

  // -------------------------------------------------------------------------
  // Events

  public ngOnInit() {
    this.fetchUsers();
  }

  // -------------------------------------------------------------------------
  // Methods

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
