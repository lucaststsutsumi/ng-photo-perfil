import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  exports: [AboutComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AboutModule { }
