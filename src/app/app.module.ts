import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MODULES, PROVIDERS } from './app.imports';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MODULES
  ],
  providers: [
    PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
