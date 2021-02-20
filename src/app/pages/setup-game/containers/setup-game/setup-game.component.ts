import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoPerfilCollection } from '../../../../shared/models/photo-perfil-collection';
import { PhotoPerfilService } from './../../../../core/services/photo-perfil.service';
import { PhotoPerfil } from './../../../../shared/models/photo-perfil.model';

@Component({
  selector: 'app-setup-game',
  templateUrl: './setup-game.component.html',
  styleUrls: ['./setup-game.component.scss']
})
export class SetupGameComponent implements OnInit {

  photoPerfilCollection$: Observable<PhotoPerfilCollection>;

  constructor(private photoPerfilService: PhotoPerfilService) { }

  ngOnInit(): void {
    this.photoPerfilCollection$ = this.photoPerfilService.getPhotoPerfilCollection();
  }

  formListener(photoPerfil: PhotoPerfil) {
    console.log(photoPerfil);
    this.photoPerfilService.addPhotoPerfil(photoPerfil);
  }
}
