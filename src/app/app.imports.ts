// Providers
import { AxiosInterceptors } from './app.axios.interceptors';
import { HttpService } from './providers/apis/http';

// Modules
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from '@components/components.module';
import { AppRoutingModule } from './app.routing.module';

// Ant Modules
import { NzButtonModule } from 'ng-zorro-antd/button';


export const MODULES = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  ComponentsModule,
  BrowserAnimationsModule,
  NzButtonModule
];

export const PROVIDERS = [
  // Rest Client providers
  AxiosInterceptors,
  HttpService
];
