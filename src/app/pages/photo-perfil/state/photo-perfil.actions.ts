import { createAction, props } from '@ngrx/store';

import { PhotoPerfil } from '../photo-perfil.model';

export const removePhotoPerfil = createAction('[PHOTO_PERFIL] DELETE photo-perfil', props<{ id: number }>());
export const removePhotoPerfilSuccess = createAction('[PHOTO_PERFIL] DELETE photo-perfil Success', props<{ id: number }>());
export const removePhotoPerfilFailed = createAction('[PHOTO_PERFIL] DELETE photo-perfil Failed', props<{ err: any }>());

export const addPhotoPerfil = createAction('[PHOTO_PERFIL] CREATE photo-perfil', props<{ entity: PhotoPerfil }>());
export const addPhotoPerfilSuccess = createAction('[PHOTO_PERFIL] CREATE photo-perfil Success', props<{ entity: PhotoPerfil }>());
export const addPhotoPerfilFailed = createAction('[PHOTO_PERFIL] CREATE photo-perfil Failed', props<{ err: any }>());

export const loadPhotoPerfilList = createAction('[PHOTO_PERFIL] LOAD photo-perfil');
export const loadPhotoPerfilListSucces = createAction('[PHOTO_PERFIL] LOAD photo-perfil Succes', props<{ entityList: PhotoPerfil[] }>());
export const loadPhotoPerfilListFailed = createAction('[PHOTO_PERFIL] LOAD photo-perfil Failed', props<{ err: any }>());
