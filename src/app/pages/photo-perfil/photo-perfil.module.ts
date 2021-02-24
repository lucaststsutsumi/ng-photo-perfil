import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PlayGameModule } from './containers/play-game/play-game.module';
import { SetupGameModule } from './containers/setup-game/setup-game.module';
import { PhotoPerfilRoutingModule } from './photo-perfil-routing.module';
import { PhotoPerfilService } from './service/photo-perfil.service';
import { PhotoPerfilEffects } from './state/photo-perfil.effects';
import { photoPerfilReducer } from './state/photo-perfil.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    PhotoPerfilRoutingModule,
    SetupGameModule,
    PlayGameModule,
    StoreModule.forFeature('photo-perfils', photoPerfilReducer),
    EffectsModule.forFeature([PhotoPerfilEffects])
  ],
  providers: [PhotoPerfilService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PhotoPerfilModule { }
