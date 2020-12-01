// Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';

// Components
import { SideBarComponent } from '@components/side-bar/side-bar.component';
import { HeaderBarComponent } from '@components/header-bar/header-bar.component';

const PAGES_COMPONENTS = [
  SideBarComponent,
  HeaderBarComponent
];

@NgModule({
  declarations: [PAGES_COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NzMenuModule,
    NzLayoutModule,
    NzIconModule
  ],
  exports: [
    PAGES_COMPONENTS
  ]
})
export class ComponentsModule { }
