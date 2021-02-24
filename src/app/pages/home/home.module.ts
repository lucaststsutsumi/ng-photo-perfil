import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  exports: [HomeComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class HomeModule { }
