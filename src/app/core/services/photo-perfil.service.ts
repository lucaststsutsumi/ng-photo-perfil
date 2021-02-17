import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { PhotoPerfilCollection } from './../../shared/models/photo-perfil-collection';
import { PhotoPerfil } from './../../shared/models/photo-perfil.model';

@Injectable({
  providedIn: 'platform'
})
export class PhotoPerfilService {

  private photoPerfilCollection: PhotoPerfilCollection;
  private collection$: Subject<PhotoPerfilCollection>;

  constructor() {
    this.photoPerfilCollection = new PhotoPerfilCollection();
    this.collection$ = new Subject<PhotoPerfilCollection>();
  }

  getPhotoPerfilCollection(): Observable<PhotoPerfilCollection> {
    return this.collection$.asObservable();
  }

  addPhotoPerfil(perfil: PhotoPerfil) {
    this.photoPerfilCollection.photoPerfilList = [...this.photoPerfilCollection.photoPerfilList, perfil];
    this.collection$.next(this.photoPerfilCollection);
  }
}
