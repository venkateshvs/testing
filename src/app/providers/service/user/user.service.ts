import { Injectable } from '@angular/core';
import { UserProvider } from '@providers/apis/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // -------------------------------------------------------------------------
  // Dependency Injection

  constructor(
    private userProvider: UserProvider
  ) { }

  // -------------------------------------------------------------------------
  // Methods

  /**
   * @function fetchUsers
   * This Method is used to fetch users
   */
  public fetchUsers() {
    return this.userProvider.fetchUsers();
  }
}
