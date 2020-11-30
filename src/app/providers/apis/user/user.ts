import { Injectable } from '@angular/core';
import { HttpService } from '../http';
import { UserModel } from '../../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserProvider {

  // -------------------------------------------------------------------------
  // Properties

  private namespace = 'api';

  // -------------------------------------------------------------------------
  // Dependency Injection

  constructor(private httpService: HttpService) { }

  // -------------------------------------------------------------------------
  // Methods

  /**
   * @function fetchUsers
   * Method to fetch users
   */
  public fetchUsers(): Promise<Array<UserModel>> {
    const endpoint = `${this.namespace}/users`;
    return this.httpService.get<Array<UserModel>>(endpoint).then((res) => {
      return this.normalizeUseres(res.data);
    });
  }

  /**
   * @function normalizeUseres
   * This Method is used to normalize the users
   */
  public normalizeUseres(payload) {
    return payload.data.map((data) => {
      const employee: UserModel = {
        avatar: data.avatar,
        email: data.email,
        firstName: data.first_name,
        id: data.id,
        lastName: data.last_name
      };
      return employee;
    })
  }

}
