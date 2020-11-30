import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import axios from 'axios';

@Injectable()
export class HttpService {

  public get<T>(url: string, params?: any, headers?: any) {
    const options = {
      headers,
      params,
    };
    return axios.get(this.formURL(url), options);
  }

  public post<T>(url: string, data?: any, headers?: any) {
    return axios.post(this.formURL(url), data, headers);
  }

  public put<T>(url: string, data?: any, headers?: any) {
    return axios.put(this.formURL(url), data, headers);
  }

  public delete<T>(url: string, data?: any, headers?: any) {
    const options = {
      headers,
      data,
    };
    return axios.delete(this.formURL(url), options);
  }

  public getBasicHeaders(token: string) {
    return {
      'Content-Type': 'application/json',
      Authorization: `Basic ${window.btoa(token)}`,
    };
  }

  public getTokenHeaders(token: string) {
    return {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    };
  }

  private formURL(url: string) {
    const apiUrl = environment.API_END_POINT;
    if (apiUrl) {
      url = `${apiUrl}/${url}`;
    }
    return url;
  }
}
