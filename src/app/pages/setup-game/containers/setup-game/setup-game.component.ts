import { Observable } from 'rxjs';
import { PhotoPerfilService } from './../../../../core/services/photo-perfil.service';
import { PhotoPerfil } from './../../../../shared/models/photo-perfil.model';
import { Component, OnInit } from '@angular/core';
import { PhotoPerfilCollection } from '../../../../shared/models/photo-perfil-collection';
@Component({
  selector: 'app-setup-game',
  templateUrl: './setup-game.component.html',
  styleUrls: ['./setup-game.component.scss']
})
export class SetupGameComponent implements OnInit {

  photoPerfilCollection: PhotoPerfilCollection;
  photoPerfilCollection$: Observable<PhotoPerfilCollection>;
  displayedColumns: string[] = ['name', 'anime', 'image', 'operations'];

  constructor(private photoPerfilService: PhotoPerfilService) { }

  ngOnInit(): void {
    this.photoPerfilCollection = new PhotoPerfilCollection();
    this.photoPerfilCollection$ = this.photoPerfilService.getPhotoPerfilCollection();
  }

  formListener(photoPerfil: PhotoPerfil) {
    this.photoPerfilService.addPhotoPerfil(photoPerfil);
  }
}
