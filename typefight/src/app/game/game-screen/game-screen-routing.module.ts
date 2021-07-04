import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { PlayComponent } from './play/play.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowToComponent } from './how-to/how-to.component';

const routes: Routes = [
	{ path: 'scoreboard', component: ScoreboardComponent },
	{ path: 'how-to', component: HowToComponent },
	{ path: '', component: PlayComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GameScreenRoutingModule {}
