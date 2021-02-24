import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as fromPhotoPerfilActions from '../state/photo-perfil.actions';
import { PhotoPerfilService } from './../service/photo-perfil.service';

@Injectable()
export class PhotoPerfilEffects {


  loadAllPhotoPerfil$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromPhotoPerfilActions.loadPhotoPerfilList),
      mergeMap(() =>
        this.photoPerfilService.getAll().pipe(
          map(entityList => fromPhotoPerfilActions.loadPhotoPerfilListSucces({ entityList: entityList })),
          catchError(err => of(fromPhotoPerfilActions.loadPhotoPerfilListFailed({ err: err })))
        )
      )
    )
  );

  addPhotoPerfil$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromPhotoPerfilActions.addPhotoPerfil),
      mergeMap(({ entity }) =>
        this.photoPerfilService.addPhotoPerfil(entity).pipe(
          map((response) => fromPhotoPerfilActions.addPhotoPerfilSuccess({ entity: response })),
          catchError(err => of(fromPhotoPerfilActions.addPhotoPerfilFailed({ err: err })))
        )
      )
    )
  );


  removePhotoPerfil$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromPhotoPerfilActions.removePhotoPerfil),
      mergeMap(({ id }) =>
        this.photoPerfilService.removePhotoPerfil(id).pipe(
          map(() => {
            console.log('response',id)
            return fromPhotoPerfilActions.removePhotoPerfilSuccess({ id: id })
          }),
          catchError(err => of(fromPhotoPerfilActions.removePhotoPerfilFailed({ err: err })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private photoPerfilService: PhotoPerfilService) { }
}
