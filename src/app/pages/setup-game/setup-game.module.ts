import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { PhotoPerfilFormComponent } from './components/photo-perfil-form/photo-perfil-form.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { SetupGameComponent } from './containers/setup-game/setup-game.component';


@NgModule({
  declarations: [SetupGameComponent, UploadFileComponent, PhotoPerfilFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule

  ], exports: [
    UploadFileComponent,
    PhotoPerfilFormComponent
  ],
})
export class SetupGameModule { }
