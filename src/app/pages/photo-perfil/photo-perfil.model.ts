/* export class PhotoPerfil {
  id: number,
  customName: string;
  fromAnime: string;
  characterDescription: string;
  generatedName: string;
  imageURL: string;
  originalFile: File;
  constructor() {

  }
} */

export interface PhotoPerfil {
  id: number,
  customName: string;
  fromAnime: string;
  characterDescription: string;
  generatedName: string;
  imageURL: string;
  originalFile: File;
}

// COLLECTION
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

/* export interface PhotoPerfilCollection {
  name: string;
  theme: string;
  photoPerfilList: PhotoPerfil[];
} */
