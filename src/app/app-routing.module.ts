import { PlayGameComponent } from './pages/photo-perfil/containers/play-game/play-game.component';
import { SetupGameComponent } from './pages/photo-perfil/containers/setup-game/containers/setup-game/setup-game.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'setup-game', component: SetupGameComponent },
  { path: 'play-game', component: PlayGameComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
