import { SetupGameComponent } from './pages/setup-game/containers/setup-game/setup-game.component';

import { PlayGameComponent } from './pages/play-game/play-game.component';
import { AboutComponent } from './pages/about/about.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'setup-game', component: SetupGameComponent },
  { path: 'about', component: AboutComponent },
  { path: 'play-game', component: PlayGameComponent },
  { path: '', redirectTo: '/setup-game', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: SetupGameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
