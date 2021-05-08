import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { PlayComponent } from './play/play.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'scoreboard', component: ScoreboardComponent},
  { path: '', component: PlayComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GameScreenRoutingModule {}
