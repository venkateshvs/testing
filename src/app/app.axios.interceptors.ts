import { Injectable } from '@angular/core';
import axios from 'axios';

// Add a response interceptor
@Injectable({
  providedIn: 'root'
})
export class AxiosInterceptors {

  constructor() {
    axios.interceptors.response.use(this.responseHandler.bind(this), this.responseErrorHandler.bind(this));
    axios.interceptors.request.use(this.requestHandler.bind(this), this.requestErrorHandler.bind(this));
  }

  public requestHandler(request) {
    console.log("in axios requestHandler")
    return request;
  }

  public requestErrorHandler(error) {
    return Promise.reject(error);
  }

  /*
   * Any status code that lie within the range of 2xx cause this function to trigger.
   * Do something with response data
   */
  public responseHandler(response) {
    return response;
  }

  /*
   * Any status codes that falls outside the range of 2xx cause this function to trigger
   * Do something with response error
   */
  public responseErrorHandler(error) {
    return Promise.reject(error);
  }
}
