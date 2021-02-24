import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PhotoPerfilState } from './photo-perfil.reducer';

const selectPhotoPerfilState = createFeatureSelector<PhotoPerfilState>('photo-perfils');

export const selectPhotoPerfil = createSelector(selectPhotoPerfilState, (state: PhotoPerfilState) => state.list);

export const selectPhotoPerfilById = createSelector(selectPhotoPerfilState, (state: PhotoPerfilState, props: any) => state.list.find(item => item == props.id));
