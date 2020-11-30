import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClassComponent } from './class/class.component';

const PAGES_COMPONENTS = [
  ClassComponent
];

@NgModule({
  declarations: [PAGES_COMPONENTS, ClassComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    PAGES_COMPONENTS
  ]
})
export class ComponentsModule { }
