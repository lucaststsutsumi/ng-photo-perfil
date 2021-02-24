import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PhotoPerfil } from 'src/app/pages/photo-perfil/photo-perfil.model';

import * as fromPhotoPerfilActions from '../../../../state/photo-perfil.actions';
import * as fromPhotoPerfilSelectors from '../../../../state/photo-perfil.selectors';

@Component({
  selector: 'app-setup-game',
  templateUrl: './setup-game.component.html',
  styleUrls: ['./setup-game.component.scss']
})
export class SetupGameComponent implements OnInit {

  photoPerfilCollection$: Observable<PhotoPerfil[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.setupStates();
  }

  setupStates() {
    this.store.dispatch(fromPhotoPerfilActions.loadPhotoPerfilList());
    this.photoPerfilCollection$ = this.store.select(fromPhotoPerfilSelectors.selectPhotoPerfil);
  }

  formListener(photoPerfil: PhotoPerfil) {
    this.store.dispatch(fromPhotoPerfilActions.addPhotoPerfil({ entity: photoPerfil }));
  }

  onDelete(id: number) {
    this.store.dispatch(fromPhotoPerfilActions.removePhotoPerfil({ id: id }));
  }
}
