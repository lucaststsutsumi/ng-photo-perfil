import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoPerfil } from '../photo-perfil.model';


@Injectable({
  providedIn: 'platform'
})
export class PhotoPerfilService {

  private path: string = 'http://localhost:3000/photoCollections';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<PhotoPerfil>(this.path);
  }

  addPhotoPerfil(entity: PhotoPerfil): Observable<PhotoPerfil> {
    return this.http.post<PhotoPerfil>(`${this.path}`, entity);
  }

  removePhotoPerfil(id: number): Observable<any> {
    return this.http.delete<PhotoPerfil>(`${this.path}/${id}`);
  }
}
