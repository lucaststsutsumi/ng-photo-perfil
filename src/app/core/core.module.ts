import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { PhotoPerfilService } from './services/photo-perfil.service';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [PhotoPerfilService],
  exports: [NavbarComponent]
})
export class CoreModule { }
