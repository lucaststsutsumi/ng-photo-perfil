import { PhotoPerfil } from './photo-perfil.model';

export class PhotoPerfilCollection {
  name: string;
  theme: string;
  photoPerfilList: PhotoPerfil[];

  constructor() {
    this.name = "beta";
    this.theme = 'any';
    this.photoPerfilList = [];
  }
}
