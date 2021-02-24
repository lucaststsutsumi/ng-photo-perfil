import { Action, createReducer, on } from '@ngrx/store';

import { PhotoPerfil } from './../photo-perfil.model';
import * as PhotoPerfilActions from './photo-perfil.actions';

export interface PhotoPerfilState {
  list: PhotoPerfil[]
}

const photoPerfilInitialState: PhotoPerfilState = {
  list: []
}

const _photoPerfilReducer = createReducer(
  photoPerfilInitialState,
  on(PhotoPerfilActions.loadPhotoPerfilList, PhotoPerfilActions.addPhotoPerfil, PhotoPerfilActions.removePhotoPerfil, state => ({
    ...state,
  })),
  on(PhotoPerfilActions.loadPhotoPerfilListSucces, (state, { entityList }) => ({
    ...state,
    list: entityList
  })),
  on(PhotoPerfilActions.addPhotoPerfilSuccess, (state, { entity }) => ({
    ...state,
    list: [...state.list, entity]
  })),
  on(PhotoPerfilActions.removePhotoPerfilSuccess, (state, { id }) => ({
    ...state,
    list: state.list.filter(item => item.id !== id)
  }))
);

export function photoPerfilReducer(state: PhotoPerfilState | undefined, action: Action): PhotoPerfilState {
  return _photoPerfilReducer(state, action);
}
