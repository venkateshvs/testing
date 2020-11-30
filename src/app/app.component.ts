import { Component } from '@angular/core';
import { AxiosInterceptors } from './app.axios.interceptors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private axiosInterceptors: AxiosInterceptors) { }
}
