import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayGameComponent } from './containers/play-game/play-game.component';
import { SetupGameComponent } from './containers/setup-game/containers/setup-game/setup-game.component';

const routes: Routes = [
  { path: 'setup-game', component: SetupGameComponent },
  { path: 'play-game', component: PlayGameComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoPerfilRoutingModule { }
