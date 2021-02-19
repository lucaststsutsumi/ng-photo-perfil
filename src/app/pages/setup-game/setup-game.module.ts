import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { CardComponent } from './components/card/card.component';
import { PhotoPerfilFormComponent } from './components/photo-perfil-form/photo-perfil-form.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { SetupGameComponent } from './containers/setup-game/setup-game.component';
import { PhotoCollectionComponent } from './components/photo-collection/photo-collection.component';


@NgModule({
  declarations: [SetupGameComponent, UploadFileComponent, PhotoPerfilFormComponent, CardComponent, PhotoCollectionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule

  ], exports: [
    UploadFileComponent,
    PhotoPerfilFormComponent,
    CardComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class SetupGameModule { }
